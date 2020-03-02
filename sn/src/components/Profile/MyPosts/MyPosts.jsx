import React from "react";
import Post from "./Post/Post";




const MyPost = (props) => {

   let postsElement = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount}/>);

   let newPostElement = React.createRef(); // создание ссылки на элемент

   let onAddPost = () => {
       props.addPost();
   };

   let onPostChange = () => {
       let text = newPostElement.current.value;
       props.updateNewPostText(text);


   };

    return <div>
        My post
        <div>
            <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div>
            {postsElement}
        </div>
    </div>
};

export default MyPost;