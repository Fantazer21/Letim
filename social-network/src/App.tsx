import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from './header/header';
import Dialogs from "./dialogs/dialogs";
import Navbar from "./nav/nav";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
               <Dialogs/>

            </div>
        </BrowserRouter>

    );
}

export default App;
