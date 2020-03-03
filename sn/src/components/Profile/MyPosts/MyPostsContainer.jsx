import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profile-reducer";
import MyPost from "./MyPosts";
import StoreContext from "../../../storeContext";


const MyPostContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                };
                return <MyPost updateNewPostText={onPostChange} addPost={addPost}
                               posts={state.profilePage.posts}
                               newPostText={state.profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )
};

export default MyPostContainer;