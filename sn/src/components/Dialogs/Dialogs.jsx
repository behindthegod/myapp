import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let newMessageElement = React.createRef();
let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
}

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.state.messages.map(m => <Message messages={m.message}/>);

    return <div className={classes.dialogs}>
        <div className={classes.dialogItem}>
            {dialogsElement}
        </div>
        <div>
            {messagesElement}
            <div><textarea ref={newMessageElement}/></div>
            <div><button onClick={addMessage}>add message</button></div>
        </div>
    </div>
};

export default Dialogs;