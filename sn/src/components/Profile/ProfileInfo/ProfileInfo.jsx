import classes from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusHooks from "./ProfileStatusHooks";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div className={classes.content}>
        <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <div>Имя пользователя:{props.profile.fullName}</div>
            <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
};

export default ProfileInfo;