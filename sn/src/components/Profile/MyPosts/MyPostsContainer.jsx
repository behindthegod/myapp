import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import MyPost from "./MyPosts";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },

    }
};
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps) (MyPost);

export default MyPostContainer;