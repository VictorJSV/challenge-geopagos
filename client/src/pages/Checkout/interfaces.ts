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

export interface IPricesList {
  total: number;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
}
