import classes from "./ProfileInfo.module.css";
import React, {useState} from "react";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";
import userPhoto from '/Users/57k/Desktop/ooo/myapp/sn/src/assets/img/juk.jpeg';
import ProfileDataForm from "./ProfileDataF";

const ProfileInfo = ({profile, status, updateStatus, isOwner, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) =>{
        if (e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData)
    };

    return <div>
        <div className={classes.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} className={classes.mainPhoto}/>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            {editMode ? <ProfileDataForm profile={profile} onSubmit={onSubmit}/>
            : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={ () => {setEditMode(true)}}/>}
            <ProfileStatusHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>
};

const ProfileData = ({profile, isOwner, goToEditMode, saveProfile}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b>Full name:</b>{profile.fullName}
        </div>
        < div>
            < b> Looking for a job:</b>{profile.lookingForAJob ? "yes" : "no"}
        </div>
        <div>
            <b>About me:</b>{profile.aboutMe}
        </div>
        <div>
            <b>Имя пользователя:</b>{profile.fullName}
        </div>
        <div>
            <b>Контакты:</b>{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
};



const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>:{contactValue}</div>
};

export default ProfileInfo;