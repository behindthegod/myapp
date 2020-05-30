import classes from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";
import userPhoto from '/Users/57k/Desktop/ooo/myapp/sn/src/assets/img/juk.jpeg';

const ProfileInfo = ({profile, status, updateStatus, isOwner}) => {
    if (!profile) {
        return <Preloader/>
    }
    const mainPhotoSelected = (e) =>{
                
    };

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={classes.mainPhoto}/>
                <div>
                    {isOwner && <input type={"file"} onChange={}/>}
                </div>
                <div>Имя пользователя:{profile.fullName}</div>
                <ProfileStatusHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
};

export default ProfileInfo;