const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState =  {
    dialogs: [
        {id: 1, name: "Sveta"},
        {id: 2, name: "Petr"}
    ],
    messages: [
        {id: 1, message: "Hello!"},
        {id: 2, message: "Samuray"},
        {id: 3, message: "JS++"},
    ],
    newMessageBody: '',
};
// initialState - начальный стейт, без него редьюсер не сработает и отдаст андеф.

const dialogsReducer = (state = initialState, action) => {
   let stateCopy = {
       ...state,
       message: [...state.messages]
   };
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                message: [...state.messages,{id: 8, message:body }],
                newMessageBody: ''
            };
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        default:
            return state;
    }
    return state;
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default dialogsReducer;