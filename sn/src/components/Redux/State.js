import React from "react";
import {rerenderEntireTree} from "../../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, post: "Привет, как дела?", likesCount: 12},
            {id: 2, post: "Все отлично-все нормально", likesCount: 144}
        ],
        newPostText: "HardCodeJS"
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Sveta"},
            {id: 2, name: "Petr"}
        ],
        messages: [
            {id: 1, message: "Hello!"},
            {id: 2, message: "Samuray"},
            {id: 3, message: "JS"},
        ]
    }
};

export let addPost = () => {
    let newPost = {
            id: 3,
            post: state.profilePage.newPostText,
            likesCount: 33
        };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export let updateNewPostText = (text) => {
    state.profilePage.newPostText=text;
    rerenderEntireTree(state);
};


export default state;