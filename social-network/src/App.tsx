import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from './header/header';
import Navbar from "./nav/nav";
import Content from "./content/content";
import {state} from './state/state';



 type appType = {
     addPost: Function
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
                         addPost={props.addPost}
                />
            </div>
        </BrowserRouter>

    );
}

export default App;
