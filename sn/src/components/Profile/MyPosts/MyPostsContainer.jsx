import React from "react";
import {addPostActionCreator} from "../../Redux/profile-reducer";
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
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
};
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps) (MyPost);

export default MyPostContainer;