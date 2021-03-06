import { AppState } from "/redux/reducers"
import { AppReducerType } from "/redux/types"

export const selector = (state: AppState) => state[AppReducerType.USER]

export const userSelector = (state: AppState) => selector(state).data

export const userStateSelector = (state: AppState) => selector(state)
