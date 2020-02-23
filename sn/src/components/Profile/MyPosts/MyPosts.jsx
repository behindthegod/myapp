import React from "react";
import classes from"./MyPosts.module.css";


const MyPost = () => {
    return <div>
        My post
        <div>
            <div><textarea/></div>
            <div><button>Add post</button></div>
        </div>
        <div>
            <div className={classes.post}>post1</div>
            <div className='post'>post2</div>
        </div>
    </div>
};

export default MyPost;