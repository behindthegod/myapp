import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'GET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

let initialState = {
    posts: [
        {id: 1, post: "Привет, как дела?", likesCount: 12},
        {id: 2, post: "Все отлично-все нормально", likesCount: 144}
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: action.newPostText,
                likesCount: 33
            };
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: state.profile,
                photos: action.photos
            }
        }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => {return {type: ADD_POST, newPostText}};
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId);
            dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
            dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
};
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};
export const setUserProfile = (profile) => {return {type: SET_USER_PROFILE, profile}};
export const setStatus = (status) => {return{type: SET_STATUS, status}};
export const savePhotoSuccess = (photos) => {return{type: SAVE_PHOTO_SUCCESS, photos}};
export default profileReducer;