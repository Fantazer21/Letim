import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from './header/header';
import Dialogs from "./dialogs/dialogs";
import Navbar from "./nav/nav";
import Content from "./content/content";
import {state} from './state/state';
import {stat} from "fs";


let a = state.dataForHeader
let b = state.profileData
let c = state.dialogsItemData
let d = state.messagesData


const App = (props: any) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header src={a}/>
                <Navbar/>
                <Content profile={b}
                         dialogsItemData={c}
                         messagesData={d}
                />
            </div>
        </BrowserRouter>

    );
}

export default App;
