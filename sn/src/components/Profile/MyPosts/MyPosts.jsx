import React from "react";
import classes from"./MyPosts.module.css";
import Post from "./Post/Post";

let PostData = [
    {id: 1, post: "Привет, как дела?", likesCount: 12},
    {id: 2, post: "Все отлично-все нормально", likesCount: 144}
];

const MyPost = (props) => {
    return <div>
        My post
        <div>
            <div><textarea/></div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div>
            <Post message={PostData[0].post} likesCount={PostData[0].likesCount}/>
            <Post message={PostData[1].post} likesCount={PostData[1].likesCount}/>
        </div>
    </div>
};

export default MyPost;