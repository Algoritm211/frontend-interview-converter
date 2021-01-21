
import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {converterReducer} from "./converter-reducer";

const rootReducer = combineReducers({
  converter: converterReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never


export type InferActionsType<U extends {[keys: string]: (...args: any) => any}> = ReturnType<PropertiesType<U>>
export type BaseThunkType<AT extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, never, AT>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.__store__ = store

export default store