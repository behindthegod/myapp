import React from "react";
import classes from"./MyPosts.module.css";
import Post from "./Post/Post";


const MyPost = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount}/>);
// post - псевдоним для каждого элемента из PostData.
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