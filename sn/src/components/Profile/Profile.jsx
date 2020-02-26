import React from "react";
import classes from './Profile.module.css';
import MyPost from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return <div className={classes.content}>
        <ProfileInfo messages={props.state.messages} dialogs={props.state.dialogs}/>
        <MyPost posts={props.state.posts} />
    </div>
};

export default Profile;