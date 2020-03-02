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
        {id: 3, message: "JS"},
    ],
    newMessageBody: "",
};
// initialState - начальный стейт, без него редьюсер не сработает и отдаст андеф.

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 5, message: body});
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
    return state;
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default dialogsReducer;