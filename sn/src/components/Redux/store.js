import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

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
            newMessageBody: "",
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },

};




export default store;




