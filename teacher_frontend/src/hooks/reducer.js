import { combineReducers } from "redux";

import * as Actions from "../constants/ActionName";

const Teacher = (state = { isLogin: false, data: {} }, action) => {
    switch (action.type) {
        case Actions.LOGIN_TEACHER:
            return { isLogin: true, data: action.paylode };
        default:
            return state;
    }
};

const Notice = (state = [], action) => {
    switch (action.type) {
        case Actions.NOTICE_FETCH:
            return action.paylode.reverse();
        case Actions.NOTICE_ADD:
            return [action.paylode, ...state]
        default:
            return state;
    }
};

const Class = (state = [], action) => {
    switch (action.type) {
        case Actions.CLASS_FETCH:
            return [...action.paylode];
        default:
            return state;
    }
};

const Loading = (state = false, action) => {
    switch (action.type) {
        case Actions.LOADING_ACTIVE:
            return true;
        case Actions.LOADING_DONE:
            return false;
        default:
            return state
    }
}

const Login = (state = false, action) => {
    switch (action.type) {
        case Actions.LOGIN_TEACHER:
            return true;
        default:
            return state
    }
}

const Exams = (state = [], action) => {
    switch (action.type) {
        case Actions.EXAM_FETCH:
            return action.paylode;
        case Actions.EXAM_ADD:
            return [action.paylode, ...state];
        default:
            return state;
    }
}

export default combineReducers({
    Login,
    Teacher,
    Notice,
    Loading,
    Class,
    Exams
});
