import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.dialogsPage.messages.map(m => <Message messages={m.message}/>);

    let newMessageElement = React.createRef();


    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    };





    return <div className={classes.dialogs}>
        <div className={classes.dialogItem}>
            {dialogsElement}
        </div>
        <div>
            {messagesElement}
            <div><textarea onChange={onMessageChange} ref={newMessageElement} value={props.newPostMessage}/></div>
            <div><button onClick={addMessage}>add message</button></div>
        </div>
    </div>
};

export default Dialogs;