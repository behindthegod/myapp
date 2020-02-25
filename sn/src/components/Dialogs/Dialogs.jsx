import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";






let DialogsData = [
    {id: 1, name : "Sveta"},
    {id: 2, name : "Petr"},
];

let MessagesData = [
    {id: 1, message : "Hello!"},
    {id: 2, message : "Samuray"},
    {id: 3, message : "JS"},
];







const Dialogs = (props) => {
    let dialogsElement = DialogsData.map( (d) => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = MessagesData.map( (m) => <Message message={m.message}/>);

    return <div className={classes.dialogs}>
        <div className={classes.DialogItem}>
            {dialogsElement}
        </div>
        <div>
            {messageElement}
        </div>
    </div>
};

export default Dialogs;