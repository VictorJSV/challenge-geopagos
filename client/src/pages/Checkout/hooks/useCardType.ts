import { useEffect, useState } from "react";
import { REGEX_PATTERN } from "../const";

export const useCardType = (valueCardNumber: string) => {
  const [cardType, setCardType] = useState("");

  useEffect(() => {
    if (!valueCardNumber) {
      setCardType("");
      return;
    }
    for (const card in REGEX_PATTERN) {
      if (
        valueCardNumber.match(REGEX_PATTERN[card as keyof typeof REGEX_PATTERN])
      ) {
        setCardType(card);
      }
    }
  }, [valueCardNumber]);

  return cardType;
};
