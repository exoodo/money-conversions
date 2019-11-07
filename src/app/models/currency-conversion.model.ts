import { Currency } from "./currency.model";

export interface CurrencyConversion {
  id?: string;
  currencyFromDto?: Currency;
  currencyToDto?: Currency;
  fromQuantity?: number;
  totalTo?: number;
}
