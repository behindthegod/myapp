const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =  {
    dialogs: [
        {id: 1, name: "Oleg"},
        {id: 2, name: "Petr"},
        {id: 3, name: "Nikolay"},
    ],
    messages: [
        {id: 1, message: "Илтя"},
        {id: 2, message: "Привет"},
        {id: 3, message: "Джей Эс"},
    ]
};


const dialogsReducer = (state = initialState, action) => {
   let stateCopy = {
       ...state,
       message: [...state.messages]
   };
    if (action.type === SEND_MESSAGE) {
        let body = action.newMessageBody;
        return {
            ...state,
            messages: [...state.messages, {id: 8, message:body }]
        };
    } else {
        return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;