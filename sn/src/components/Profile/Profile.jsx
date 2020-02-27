import React from "react";
import classes from './Profile.module.css';
import MyPost from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../Redux/State";


const Profile = (props) => {
    return <div className={classes.content}>
        <ProfileInfo />
        <MyPost posts={props.profilePage.posts} addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}/>
    </div>
};

export default Profile;