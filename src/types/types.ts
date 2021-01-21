
export type RatesType = {[key: string]: number}

export interface IResponseCurrencies {
  rates: RatesType,
  base: string
  date: string
}