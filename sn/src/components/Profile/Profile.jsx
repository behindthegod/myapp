import React from "react";
import classes from './Profile.module.css';
import MyPost from "./MyPosts/MyPosts";


const Profile = () => {
    return <div className={classes.content}>
        <img src='https://im0-tub-by.yandex.net/i?id=65a08c78997674d67f47b147427a2485&n=13' alt='avatar'/>
        <div>ava+descriptiont</div>
        <MyPost />
    </div>
};

export default Profile;