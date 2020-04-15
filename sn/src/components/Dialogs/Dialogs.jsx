import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormControls/FormControls";
import {maxLengthCreator, required} from "../utils/validators/validators";


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElement = state.messages.map(m => <Message messages={m.message} key={m.id}/>);


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };


    return <div className={classes.dialogs}>
        <div className={classes.dialogItem}>
            {dialogsElement}
        </div>
        <div>
            <div>{messagesElement}</div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    </div>
};
const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit }>
            <div>
                <Field component={Textarea} name={"newMessageBody"} placeholder={"Ебучий урок"} validate={[required, maxLength50]}/>
            </div>
        <div>
            <button>add message</button>
        </div>
    </form>
    )
};

 const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"}) (AddMessageForm);


export default Dialogs;