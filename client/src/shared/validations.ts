import dayjs from "dayjs";

const regexPattern = {
  MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
  VISA: /^4[0-9]{2,}$/,
  AMERICAN_EXPRESS: /^3[47][0-9]{5,}$/,
  DINERS_CLUB: /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/,
};

export const Validations = {
  cardNumber: (value: string | undefined) => {
    if (!value) {
      return false;
    }
    const currentValue = value.replace(/[^\d]/g, "");
    for (const card in regexPattern) {
      if (currentValue.match(regexPattern[card as keyof typeof regexPattern])) {
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
