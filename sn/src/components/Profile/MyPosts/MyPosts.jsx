import React from "react";
import classes from"./MyPosts.module.css";
import Post from "./Post/Post";


const MyPost = (props) => {

   let postsElement = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount}/>);

   let newPostElement = React.createRef(); // создание ссылки на элемент
   let addPost = () => {
       let text = newPostElement.current.value;
       alert(text);
   };

    return <div>
        My post
        <div>
            <div><textarea ref={newPostElement}/></div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div>
            {postsElement}
        </div>
    </div>
};

export default MyPost;