
import {InferActionsType} from './redux-store'

const TOGGLE_LOADING = 'frontend-interview-converter/currencyList/TOGGLE_LOADING'


type InitialStateCurrencyListType = {
  loading: boolean,
  favoriteCurrencies: Array<string>,
  base: string,
  rates: {[key: string]: number}
}

const initialState: InitialStateCurrencyListType = {
  loading: false,
  favoriteCurrencies: [],
  base: 'USD',
  rates: {}
}

export const currencyListReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    default:
      return state
  }
}

const actions = {
  toggleLoading(loading: boolean) {
    return {
      type: TOGGLE_LOADING,
      loading: loading
    } as const
  },

}


type ActionsType = InferActionsType<typeof actions>