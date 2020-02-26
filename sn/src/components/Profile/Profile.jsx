import React from "react";
import classes from './Profile.module.css';
import MyPost from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return <div className={classes.content}>
        <ProfileInfo dialogs={props.dialogs} messages={props.message}/>
        <MyPost posts={props.posts}/>
    </div>
};

export default Profile;