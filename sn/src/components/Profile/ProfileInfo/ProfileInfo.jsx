import classes from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div className={classes.content}>
        {/*<div>*/}
        {/*    <img src='https://im0-tub-by.yandex.net/i?id=65a08c78997674d67f47b147427a2485&n=13' alt='avatar'/>*/}
        {/*</div>*/}
        <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <div>Имя пользователя:{props.profile.fullName}</div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
};

export default ProfileInfo;