import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from './header/header';
import Navbar from "./nav/nav";
import Content from "./content/content";
import {AppDispatchType, AppStateType} from "./redux/redux-store";


type AppPropsType = {
    dispatch: AppDispatchType
    state: AppStateType
}


const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header src={props.state.dataForHeader}
                />
                <Navbar/>
                <Content
                    state={props.state}
                    dispatch={props.dispatch}
                />
            </div>
        </BrowserRouter>

    );
}

export default App;
