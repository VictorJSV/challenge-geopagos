export type FormValues = {
  cardNumber: string;
  cardExpiration: string;
  cvc: string;
  cardName: string;
  dni: number;
  fees: number;
  email: string;
};

export interface IFee {
  months: number;
  value: number;
  cf: number;
  interest: number;
}

