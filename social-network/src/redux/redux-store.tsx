import {combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {MessagesActionsType, messagesReducer} from "./messages-reducer";


let state = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    dataForHeader: () => "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png",
})
export type AppStateType = ReturnType<typeof state>
export type AppDispatchType = typeof store.dispatch
export type AppActionsType = ProfileActionsType | MessagesActionsType

export let store = createStore(state)