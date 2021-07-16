import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, stateType} from './state/state';


export let rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App dispatch={state.dispatch.bind(state)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}




