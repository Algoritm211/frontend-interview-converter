import axios from "axios";
import {IResponseCurrencies} from "../types/types";

const instanceAxios = axios.create({
  baseURL: 'https://api.exchangeratesapi.io/latest'
})


export const converterAPI = {
  async convert(fromCurrency: string, toCurrency: string) {
    return instanceAxios.get<IResponseCurrencies>(`?base=${fromCurrency}&symbols=${toCurrency}`)
      .then(data => data.data)
  }
}