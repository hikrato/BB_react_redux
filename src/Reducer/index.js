import{GET_QUOTE, GET_CHARACTERS, GET_EPISODES, GET_DEATHS, GET_CHARATERS, GET_CHARACTER_DETAILS} from '../Actions'
const initialState = {
    quote:{},
    characters:[],
    character:{},
    episodes:[],
    episode:{},
    deaths:[],
    isLoadig:true
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_QUOTE:
            return { ...state, quote:payload };
        case GET_CHARACTERS:
            return { ...state, characters:payload };
        case GET_CHARACTER_DETAILS:
            return { ...state, character:payload , isLoadig:false };

        default:
            return state;
    }
};

export default rootReducer