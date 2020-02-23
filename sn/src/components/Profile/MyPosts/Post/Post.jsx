import classes from "./Post.module.css";
import React from "react";


const Post = (props) => {
    return <div className={classes.post}>
        <img src="https://i04.fotocdn.net/s124/d6202488bbb86446/user_l/2821886434.jpg" alt='kot'/>
        <div>{props.message}</div>
        <div><span>like</span></div>
    </div>

};

export default Post;