import { ADD, ADD_FOCUS_NAME, ADD_FOCUS_PASS, ADD_LENGTH_CHECK_NAME, ADD_LENGTH_CHECK_PASS } from "./actions/actionTypes";


const initialState = {
    isFocusUsername: false,
    isFocusPass: false,
    isLengthCheckName: false,
    isLengthCheckPass: false,
}

const rootReducer = (state = initialState, action) => {

    switch(action.type) {
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
            
        case ADD_LENGTH_CHECK_NAME:
            return {
                ...state,
                isLengthCheckName: !state.isLengthCheckName
            }

        case ADD_LENGTH_CHECK_PASS:
            return {
                ...state,
                isLengthCheckPass: !state.isLengthCheckPass
            }
        

        default: 
            return state;
    }
    
};


export default rootReducer;