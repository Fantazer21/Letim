import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from './header/header';
import Dialogs from "./dialogs/dialogs";
import Navbar from "./nav/nav";
import Content from "./content/content";

export type appType = {
    dataHeader: string,
    dataProfile: any,
    dialogsItemData: any,
    messagesData: any
}


function App(props: appType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header src={props.dataHeader}/>
                <Navbar/>
                <Content profile={props.dataProfile}
                         dialogsItemData={props.dialogsItemData}
                         messagesData={props.messagesData}
                />
            </div>
        </BrowserRouter>

    );
}

export default App;
