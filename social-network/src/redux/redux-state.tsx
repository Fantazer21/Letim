import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
})

export let state = createStore(reducers)