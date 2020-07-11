import { ADD, ADD_FOCUS_NAME, ADD_FOCUS_PASS, ADD_VALUE_NAME, ADD_VALUE_PASS, ADD_PASS_INER_HTML } from "./actions/actionTypes";


const initialState = {
    isFocusUsername: false,
    isFocusPass: false,
    isValueName: '',
    isValuePass: '',
    isPassInerHtml: '',
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD:
            return {
                counter: state.counter + 1
            };

        case ADD_FOCUS_NAME:
            return {
                ...state,
                isFocusUsername: !state.isFocusUsername,
            };

        case ADD_FOCUS_PASS:
            return {
                ...state,
                isFocusPass: !state.isFocusPass,
            }

        case ADD_VALUE_NAME:
            return {
                ...state,
                isValueName: action.payload,
            }

        case ADD_VALUE_PASS:
            return {
                ...state,
                isValuePass: action.payload
            }

        case ADD_PASS_INER_HTML: {
            return {
                ...state,
                isPassInerHtml: action.payload, 
            }
        }

        default:
            return state;
    }

};


export default rootReducer;