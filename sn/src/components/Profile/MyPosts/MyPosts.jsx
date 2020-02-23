import React from "react";
import classes from"./MyPosts.module.css";
import Post from "./Post/Post";


const MyPost = () => {
    return <div>
        My post
        <div>
            <div><textarea/></div>
            <div><button>Add post</button></div>
        </div>
        <div>
            <Post message='hello'/>
            <Post message='tututu'/>
        </div>
    </div>
};

export default MyPost;