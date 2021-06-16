import {counterReducers} from "./counterReducers";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
    counter: counterReducers
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

type AppStoreType = typeof store