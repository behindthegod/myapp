import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = state.messages.map(m => <Message messages={m.message}/>);


    let onNewMessageChange = () => {
        props.sendMessage();
    };

    let onSendMessageClick = (body) => {
        props.sendMessage();
        props.updateNewMessageBody(body);

    };

    return <div className={classes.dialogs}>
        <div className={classes.dialogItem}>
            {dialogsElement}
        </div>
        <div>
            <div>{messagesElement}</div>
            <div>
                <div><textarea onChange={onNewMessageChange} placeholder='Ебучий урок!!!!!!' value={props.newMessageBody}/></div>
                <div>
                    <button onClick={onSendMessageClick}>add message</button>
                </div>
            </div>
        </div>
    </div>
};

export default Dialogs;