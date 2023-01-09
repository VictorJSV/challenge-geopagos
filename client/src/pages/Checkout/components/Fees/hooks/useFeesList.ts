import { IFee } from "@src/pages/Checkout/interfaces";
import { useEffect, useState } from "react";

export const useFeesList = (total: number) => {
  const initialFee: IFee[] = [
    {
      months: 1,
      cf: 0,
      interest: 0,
      value: total,
    },
    {
      months: 3,
      cf: 0.8,
      interest: 0,
      value: 0,
    },
    {
      months: 6,
      cf: 0.9,
      interest: 0,
      value: 0,
    },
  ];
  const [feesList, setFeesList] = useState(initialFee);

  useEffect(() => {
    setFeesList(
      feesList.map((fee) => {
        if (fee.months != 1) {
          const interest = Number(((total * fee.cf) / fee.months).toFixed(2));
          const value = Number((total / fee.months + interest).toFixed(2));
          return {
            ...fee,
            interest,
            value,
          };
        }
        return fee;
      })
    );
  }, [total]);

  return {
    feesList,
  };
};
