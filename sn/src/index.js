import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state from "./components/Redux/State";
import {rerenderEntireTree} from "./render";



rerenderEntireTree(state);

serviceWorker.unregister();

