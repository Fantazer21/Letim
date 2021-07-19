import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, stateType} from './redux/state';
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App dispatch={state.dispatch.bind(state)}
            />
        </BrowserRouter>

        ,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)
