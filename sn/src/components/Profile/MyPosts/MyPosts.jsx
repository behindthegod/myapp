import React from "react";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/State";



const MyPost = (props) => {

   let postsElement = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount}/>);

   let newPostElement = React.createRef(); // создание ссылки на элемент

   let addPost = () => {
       props.dispatch(addPostActionCreator());
   };

   let onPostChange = () => {
       let text = newPostElement.current.value;
       let action = updateNewPostTextActionCreator(text);
       props.dispatch(action);

   };

    return <div>
        My post
        <div>
            <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
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