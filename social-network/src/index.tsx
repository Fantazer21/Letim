import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state, stateType} from './state/state';


const rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App addPost={addPost} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)