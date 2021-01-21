import {IResponseCurrencies} from "../types/types"
import {BaseThunkType, InferActionsType} from "./redux-store";
import {converterAPI} from "../api/converter-api";


const SET_CONVERTED_CURRENCY = 'frontend-interview-converter/converter/SET_CONVERTED_CURRENCY'
const TOGGLE_LOADING = 'frontend-interview-converter/converter/TOGGLE_LOADING'
const SET_CURR_INFO = 'frontend-interview-converter/converter/SET_CURR_INFO'

interface IConverterInitialState {
  convertedCurrency: IResponseCurrencies
  loading: boolean
  amount: number
  to: string,
  base: string
}

const InitialState: IConverterInitialState = {
  convertedCurrency: null as unknown as IResponseCurrencies,
  loading: false,
  amount: 1,
  base: '',
  to: ''
}

export const converterReducer = (state = InitialState, action: ActionType) => {
  switch (action.type) {
    case SET_CONVERTED_CURRENCY:
      return {
        ...state,
        convertedCurrency: action.currencyObj
      }
    case SET_CURR_INFO:
      return {
        ...state,
        amount: action.amount,
        base: action.base,
        to: action.to
      }
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    default:
      return state
  }
}


export const actions = {
  setConvertedCurrency(currencyObj: IResponseCurrencies) {
    return {
      type: SET_CONVERTED_CURRENCY,
      currencyObj: currencyObj
    } as const
  },

  toggleLoading(loading: boolean) {
    return {
      type: TOGGLE_LOADING,
      loading: loading
    } as const
  },

  setConvertInfo(fromCurrency: string, toCurrency: string, amount: number) {
    return {
      type: SET_CURR_INFO,
      base: fromCurrency,
      to: toCurrency,
      amount: amount
    } as const
  }
}

export const convertCurrency = (fromCurrency: string, toCurrency: string, amount: string): ThunkActions => async (dispatch) => {
  dispatch(actions.toggleLoading(true))
  if (amount !== '') {
    dispatch(actions.setConvertInfo(fromCurrency, toCurrency, parseFloat(amount)))
  }
  const currencyObj = await converterAPI.convert(fromCurrency, toCurrency)
  dispatch(actions.setConvertedCurrency(currencyObj))
  dispatch(actions.toggleLoading(false))
}


type ThunkActions = BaseThunkType<ActionType>
type ActionType = InferActionsType<typeof actions>

