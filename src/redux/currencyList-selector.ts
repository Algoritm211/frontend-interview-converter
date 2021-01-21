import {AppStateType} from "./redux-store";

export const getIsLoading = (state: AppStateType) => {
  return state.currencyList.loading
}