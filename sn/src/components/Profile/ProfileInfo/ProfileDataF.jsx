import React from "react";
import {createField, Input} from "../../Common/FormControls/FormControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({handleSubmit, profile}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        <div>
            <b>Full name:</b>{createField("full name", "fullName", [], Input)}
        </div>
        < div>
            < b> Looking for a job:</b>
            {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>About me:</b>{profile.aboutMe}
            {createField("About me", "aboutMe", [], "Input")}
        </div>
        <div>
            <b>Имя пользователя:</b>{profile.fullName}
        </div>
        {/*<div>*/}
        {/*    <b>Контакты:</b>{Object.keys(profile.contacts).map(key => {*/}
        {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
        {/*})}*/}
        {/*</div>*/}
        };
    </form>;
};

const ProfileDataFormReduxForm = reduxForm({form:'edit-profile'})(ProfileDataForm);
export default ProfileDataFormReduxForm;