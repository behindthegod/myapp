import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./components/Redux/State";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./components/Redux/State";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>,
        </BrowserRouter>, document.getElementById('root'));
};




rerenderEntireTree(state);

subscribe(rerenderEntireTree);

serviceWorker.unregister();

