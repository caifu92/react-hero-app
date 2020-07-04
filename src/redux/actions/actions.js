import { ADD } from "./actionTypes";


export function add() {
    return {
        type: ADD
    }
} 

export function incrementAsync(value) {
    return (dispatch) => {
        const interval = setInterval(() => {
            if(value > 5) {
                clearInterval(interval);
            }
            
            dispatch(add());
        }, 1000);
    }
}