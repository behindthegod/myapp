import React from "react";

let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber = observer;

    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                post: this._state.profilePage.newPostText,
                likesCount: 33
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText='';
            this._callSubscriber(this.getState());

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText=action.text;
            this._callSubscriber(this.getState());

        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: 'чух',
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newPostMessage='';
            this._callSubscriber(this.getState());

        } else if (action === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText=action.text;
            this._callSubscriber(this.getState());
        }
    }
};

export default store;



// let rerenderEntireTree = ()=> {}
// let state = {
//     profilePage: {
//         posts: [
//             {id: 1, post: "Привет, как дела?", likesCount: 12},
//             {id: 2, post: "Все отлично-все нормально", likesCount: 144}
//         ],
//         newPostText: "HardCodeJS"
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: "Sveta"},
//             {id: 2, name: "Petr"}
//         ],
//         messages: [
//             {id: 1, message: "Hello!"},
//             {id: 2, message: "Samuray"},
//             {id: 3, message: "JS"},
//         ],
//         newPostMessage: "Super"
//     }
// };
// export const addPost = () => {
//     let newPost = {
//             id: 3,
//             post: state.profilePage.newPostText,
//             likesCount: 33
//         };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText='';
//     rerenderEntireTree(state);
// };
// export const updateNewPostText = (text) => {
//     state.profilePage.newPostText=text;
//     rerenderEntireTree(state);
// };
// export const addMessage = () => {
//     let newMessage = {
//         id: 4,
//         message: "Привет!"
//     };
//     state.dialogsPage.messages.push(newMessage);
//     state.dialogsPage.newPostMessage='';
//     rerenderEntireTree(state);
// };
// export const updateNewMessageText = (text) => {
//     state.dialogsPage.newMessageText=text;
//     rerenderEntireTree(state);
// };
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
//
// };
//
// addPost() {
//     let newPost = {
//         id: 3,
//         post: this._state.profilePage.newPostText,
//         likesCount: 33
//     };
//     this._state.profilePage.posts.push(newPost);
//     this._state.profilePage.newPostText='';
//     this._callSubscriber(this.getState());
// },
// updateNewPostText(text) {
//     this._state.profilePage.newPostText=text;
//     this._callSubscriber(this.getState());
// },
// addMessage() {
//     let newMessage = {
//         id: 4,
//         message: "Привет!"
//     };
//     this._state.dialogsPage.messages.push(newMessage);
//     this._state.dialogsPage.newPostMessage='';
//     this._callSubscriber(this.getState());
// },
// updateNewMessageText(text) {
//     this._state.dialogsPage.newMessageText=text;
//     this._callSubscriber(this.getState());
// },

