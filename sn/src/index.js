import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let dialogs = [
    {id: 1, name: "Sveta"},
    {id: 2, name: "Petr"},
];
let messages = [
    {id: 1, mes: "Hello!"},
    {id: 2, mes: "Samuray"},
    {id: 3, mes: "JS"},
];
let posts = [
    {id: 1, post: "Привет, как дела?", likesCount: 12},
    {id: 2, post: "Все отлично-все нормально", likesCount: 144}
];


ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

