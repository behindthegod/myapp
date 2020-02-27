import React from "react";

let rerenderEntireTree = ()=> {}

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
        ],
        newPostMessage: "Super"
    }
};

export const addPost = () => {
    let newPost = {
            id: 3,
            post: state.profilePage.newPostText,
            likesCount: 33
        };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);
};

export const updateNewPostText = (text) => {
    state.profilePage.newPostText=text;
    rerenderEntireTree(state);
};

export const addMessage = () => {
    let newMessage = {
        id: 4,
        message: "Привет!"
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newPostMessage='';
    rerenderEntireTree(state);
};

export const updateNewMessageText = (text) => {
    state.dialogsPage.newMessageText=text;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;

};

export default state;