import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from './header/header';
import Navbar from "./nav/nav";
import Content from "./content/content";
import {AppActionsType, AppDispatchType, AppStateType} from "./redux/redux-store";
import {addPostAC, deletePostAC} from "./redux/state";
import {AddPostProfileAC, DeletePostProfileAC} from "./redux/profile-reducer";
import {AddMessageAC, DeleteMessageAC} from "./redux/messages-reducer";

 type AppPropsType = {
     dispatch: AppDispatchType
     state: AppStateType
 }


const  App = (props: AppPropsType) => {
    let state = props.state
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header src={state.dataForHeader}
                />
                <Navbar/>
                <Content state={state}
                         addPost={(postMessage: string) => props.dispatch(AddMessageAC(postMessage))}
                         deletePost={() => props.dispatch(DeleteMessageAC())}
                         addPostProfile={(state: string) => props.dispatch(AddPostProfileAC(state))}
                         deletePostProfile = {()=> props.dispatch(DeletePostProfileAC())}
                />
            </div>
        </BrowserRouter>

    );
}

export default App;
