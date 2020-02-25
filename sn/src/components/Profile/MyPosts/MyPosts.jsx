import React from "react";
import classes from"./MyPosts.module.css";
import Post from "./Post/Post";

let PostData = [
    {id: 1, post: "Привет, как дела?", likesCount: 12},
    {id: 2, post: "Все отлично-все нормально", likesCount: 144}
];

let postsElement = PostData.map(post => <Post message={post.post} likesCount={post.likesCount}/>);
// post - псевдоним для каждого элемента из PostData.

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

            {postsElement}

        </div>
    </div>
};

export default MyPost;