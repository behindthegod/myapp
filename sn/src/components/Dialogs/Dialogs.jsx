import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

let DialogsData = [
    {id: 1, name : "Sveta"},
    {id: 2, name : "Petr"},
];

let MessagesData = [
    {id: 1, message : "Hello!"},
    {id: 2, message : "Samuray"},
    {id: 3, message : "JS"},
];

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>

};

const Dialogs = (props) => {
    return <div className={classes.dialogs}>
        <div className={classes.dialogItem}>
            <DialogsItem name={DialogsData[0].name} id={DialogsData[0].id}/>
            <DialogsItem name={DialogsData[1].name} id={DialogsData[1].id}/>
        </div>
        <div>
            <Message message={MessagesData[0].message}/>
            <Message message={MessagesData[1].message}/>
            <Message message={MessagesData[2].message}/>
        </div>
    </div>
};

export default Dialogs;