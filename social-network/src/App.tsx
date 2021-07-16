import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from './header/header';
import Navbar from "./nav/nav";
import Content from "./content/content";
import {AppActionsType, state} from './state/state';



 type appType = {
     dispatch: (action: AppActionsType) => void
 }

let a = state.dataForHeader
let b = state.profileData
let c = state.dialogsItemData
let d = state.messagesData


const App = (props: appType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header src={a}/>
                <Navbar/>
                <Content profile={b}
                         dialogsItemData={c}
                         messagesData={d}
                         addPost={(postMessage: string) => props.dispatch({ type: "addPost", postMessage})}
                         deletePost={() => props.dispatch({type: "deletePost"})}
                />
            </div>
        </BrowserRouter>

    );
}

export default App;
