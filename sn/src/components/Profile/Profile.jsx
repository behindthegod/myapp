import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return <div className={classes.content}>
        <ProfileInfo />
        <MyPostContainer />
    </div>
};

export default Profile;