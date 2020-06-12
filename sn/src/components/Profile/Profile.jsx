import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return <div className={classes.content}>
        <ProfileInfo isOwner={props.isOwner}
                     profile={props.profile}
                     status={props.status}
                     saveProfile={props.saveProfile}
                     updateStatus={props.updateStatus}
                     savePhoto={props.savePhoto}/>
        <MyPostContainer/>
    </div>
};

export default Profile;