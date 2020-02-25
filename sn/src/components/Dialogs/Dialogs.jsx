import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};

let DialogsData = [
    {id: 1, name : "Sveta"},
    {id: 2, name : "Petr"},
];

let MessagesData = [
    {id: 1, message : "Hello!"},
    {id: 2, message : "Samuray"},
    {id: 3, message : "JS"},
];





const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
};

const Dialogs = (props) => {
    let dialogsElement = DialogsData.map( (d) => <DialogsItem name={d.name} id={d.id}/>);
    let messageElement = MessagesData.map( (m) => <Message message={m.message}/>);

    return <div className={classes.dialogs}>
        <div className={classes.dialogItem}>
            {dialogsElement}
        </div>
        <div>
            {messageElement}
        </div>
    </div>
};

export default Dialogs;