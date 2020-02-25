import React from "react";
import classes from './Profile.module.css';
import MyPost from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return <div className={classes.content}>
        <ProfileInfo/>
        <MyPost/>
    </div>
};

export default Profile;