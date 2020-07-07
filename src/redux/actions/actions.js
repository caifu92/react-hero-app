import { ADD, ADD_FOCUS_NAME, ADD_FOCUS_PASS, ADD_LENGTH_CHECK_NAME, ADD_LENGTH_CHECK_PASS } from "./actionTypes";


export function add() {
    return {
        type: ADD
    }
} 

export function addFocusName() {
    return {
        type: ADD_FOCUS_NAME,
    }
}

export function addFocusPass() {
    return {
        type: ADD_FOCUS_PASS,
    }
}

export function addCheckLengthName(){
    return {
        type: ADD_LENGTH_CHECK_NAME,
    }
}

export function addCheckLengthPass(){
    return {
        type: ADD_LENGTH_CHECK_PASS,
    }
}

