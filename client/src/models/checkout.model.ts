export interface CheckoutState {
  status: string;
  error: null | string;
  data: IPricesList;
}

export interface IPricesList {
  total: number;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
}
