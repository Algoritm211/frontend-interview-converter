
import {BaseThunkType, InferActionsType} from './redux-store'
import {converterAPI} from "../api/converter-api";
import { RatesType } from '../types/types';

const TOGGLE_LOADING = 'frontend-interview-converter/currencyList/TOGGLE_LOADING'
const SET_RATES = 'frontend-interview-converter/currencyList/SET_RATES'
const SET_BASE_CURRENCY = 'frontend-interview-converter/currencyList/SET_BASE_CURRENCY'
const SET_FAVORITE_CURRENCIES = 'frontend-interview-converter/currencyList/SET_FAVORITE_CURRENCIES'


type InitialStateCurrencyListType = {
  loading: boolean,
  favoriteCurrencies: Array<string>,
  base: string,
  rates: RatesType
}

const initialState: InitialStateCurrencyListType = {
  loading: false,
  favoriteCurrencies: [],
  base: 'USD',
  rates: {}
}

export const currencyListReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case SET_BASE_CURRENCY:
      return {
        ...state,
        base: action.baseCurrency
      }
    case SET_RATES:
      return {
        ...state,
        rates: action.rates
      }
    case SET_FAVORITE_CURRENCIES:
      return {
        ...state,
        favoriteCurrencies: action.favoriteList
      }
    default:
      return state
  }
}

export const actions = {
  toggleLoading(loading: boolean) {
    return {
      type: TOGGLE_LOADING,
      loading: loading
    } as const
  },
  setBase(baseCurrency: string) {
    return {
      type: SET_BASE_CURRENCY,
      baseCurrency: baseCurrency
    } as const
  },
  setRates(rates: RatesType) {
    return {
      type: SET_RATES,
      rates: rates
    } as const
  },
  setFavoriteCurrencies(favoriteList: Array<string>) {
    return {
      type: SET_FAVORITE_CURRENCIES,
      favoriteList: favoriteList
    } as const
  }
}


export const loadCurrencies = (): ThunkType => async (dispatch, getState) => {
  dispatch(actions.toggleLoading(true))
  const dataRates = await converterAPI.getRates(getState().currencyList.base)
  dispatch(actions.setRates(dataRates.rates))
  dispatch(actions.toggleLoading(false))
}


type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType>