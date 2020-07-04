import { ADD } from "./actions/actionTypes";


const initialState = {
    counter: 0,
}

const rootReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD: 
            return {
                counter: state.counter + 1
            };
        
        case 'ADD_NUMBER': 
            return {
                counter: state.counter + action.payload,
            }

        default: 
            return state;
    }
    
};


export default rootReducer;