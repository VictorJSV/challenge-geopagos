import { REGEX_PATTERN } from "@src/pages/Checkout/const";
import dayjs from "dayjs";

export const Validations = {
  cardNumber: (value: string | undefined) => {
    if (!value) {
      return false;
    }
    const currentValue = value.replace(/[^\d]/g, "");
    for (const card in REGEX_PATTERN) {
      if (currentValue.match(REGEX_PATTERN[card as keyof typeof REGEX_PATTERN])) {
        if (value) {
          return /^[1-6]{1}[0-9]{14,15}$/i.test(currentValue.trim())
            ? true
            : false;
        }
      }
    }
    return false;
  },
  cardExpiration: (value: string | undefined) => {
    if (!value) {
      return false;
    }
    if (/^(0[1-9]|1[0-2])\/[0-9]{2}$/i.test(value)) {
      const visaValue = value.split("/");
      const initialYear = String(dayjs().get("year")).substring(0, 2);
      const day = dayjs()
        .set("date", 1)
        .set("month", Number(visaValue[0]) - 1)
        .set("year", Number(initialYear.concat(visaValue[1])));
      return dayjs().isAfter(day, "month");
    }
    return false;
  },
};
