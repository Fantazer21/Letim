import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from './header/header';
import Navbar from "./nav/nav";
import Content from "./content/content";
import {AppPropsType} from './types';


const App = (props: AppPropsType) => {
    let state = props.state
    let dispatch = props.dispatch
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header src={state.dataForHeader}
                />
                <Navbar/>
                <Content
                    state={state}
                    dispatch={dispatch}
                />
            </div>
        </BrowserRouter>

    );
}

export default App;
