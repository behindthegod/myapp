import {userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'GET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 1, post: "Привет, как дела?", likesCount: 12},
        {id: 2, post: "Все отлично-все нормально", likesCount: 144}
    ],
    newPostText: "HardCodeJS",
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                post: state.newPostText,
                likesCount: 33
            };
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText: action.text
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
};


export const addPostActionCreator = () => {return {type: ADD_POST}};
export const updateNewPostTextActionCreator = (text) => {return {type: UPDATE_NEW_POST_TEXT, text: text}};
export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};
export const setUserProfile = (profile) => {return {type: SET_USER_PROFILE, profile}}
export default profileReducer;