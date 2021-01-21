import {AppStateType} from "./redux-store";

export const getIsLoading = (state: AppStateType) => {
  return state.currencyList.loading
}

export const getFavorites = (state: AppStateType) => {
  return state.currencyList.favoriteCurrencies
}

export const getBaseCurrency = (state: AppStateType) => {
  return state.currencyList.base
}

export const getRates = (state: AppStateType) => {
  return state.currencyList.rates
}