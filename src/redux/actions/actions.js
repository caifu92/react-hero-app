import { ADD, ADD_FOCUS_NAME, ADD_FOCUS_PASS, ADD_VALUE_NAME, ADD_VALUE_PASS, ADD_PASS_INER_HTML } from "./actionTypes";


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

export function addValueName(value){

    return {
        type: ADD_VALUE_NAME,
        payload: value,
    }
}

export function addValuePass(value){
    return {
        type: ADD_VALUE_PASS,
        payload: value,
    }
}

export function addPassInerHtml(value) {
    return {
        type: ADD_PASS_INER_HTML,
        payload: value,
    }
}