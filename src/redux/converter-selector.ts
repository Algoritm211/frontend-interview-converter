import {AppStateType} from "./redux-store";


export const getCurrencyObj = (state: AppStateType) => {
  return state.converter.convertedCurrency
}

export const getAmount = (state: AppStateType) => {
  return state.converter.amount
}

export const getToConverted = (state: AppStateType) => {
  return state.converter.to
}

export const getIsLoading = (state: AppStateType) => {
  return state.converter.loading
}