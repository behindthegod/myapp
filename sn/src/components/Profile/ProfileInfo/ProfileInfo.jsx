import classes from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusHooks from "./ProfileStatusHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return <div className={classes.content}>
        <div className={classes.descriptionBlock}>
            <img src={profile.photos.large}/>
            <div>Имя пользователя:{profile.fullName}</div>
            <ProfileStatusHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>
};

export default ProfileInfo;