import React from "react";

let state = {
    profilePage: {
        posts: [
            {id: 1, post: "Привет, как дела?", likesCount: 12},
            {id: 2, post: "Все отлично-все нормально", likesCount: 144}
        ]
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

export default state;