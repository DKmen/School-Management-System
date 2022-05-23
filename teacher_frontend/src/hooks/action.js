import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

import * as URL from '../constants/Url';
import * as Actions from "../constants/ActionName";

export function LoginTeacher(UserName, password) {
    return async (dispatch) => {
        try {
            dispatch({
                type: Actions.LOADING_ACTIVE
            })
            const responceData = await axios.post(`${URL.teacher}/login`, {
                UserName: UserName,
                password: password
            })
            if (!responceData.data.error) {
                SecureStore.setItemAsync('teacherToken', responceData.data.token);
                dispatch({
                    type: Actions.LOGIN_TEACHER,
                    paylode: responceData.data.data
                })
            }
            dispatch({
                type: Actions.LOADING_DONE
            })
        } catch (error) {
            console.dir(error)
            dispatch({
                type: Actions.LOADING_DONE
            })
        }
    }
}

export function FetchNotice(UserName, password) {
    return async (dispatch) => {
        try {
            dispatch({
                type: Actions.LOADING_ACTIVE
            })
            const token = await SecureStore.getItemAsync('teacherToken');
            console.log(token)
            const responceData = await axios.get(`${URL.notice}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!responceData.data.error) {
                dispatch({
                    type: Actions.NOTICE_FETCH,
                    paylode: responceData.data.data
                })
            }
            dispatch({
                type: Actions.LOADING_DONE
            })
        } catch (error) {
            console.dir(error)
            dispatch({
                type: Actions.LOADING_DONE
            })
        }
    }
}

export function FetchClass() {
    return async (dispatch) => {
        try {
            dispatch({
                type: Actions.LOADING_ACTIVE
            })
            const token = await SecureStore.getItemAsync('teacherToken');
            const responceData = await axios.get(`${URL.classes}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!responceData.data.error) {
                dispatch({
                    type: Actions.CLASS_FETCH,
                    paylode: responceData.data.data
                })
            }
            dispatch({
                type: Actions.LOADING_DONE
            })
        } catch (error) {
            console.dir(error)
            dispatch({
                type: Actions.LOADING_DONE
            })
        }
    }
}

export function CreateNotice(data) {
    return async (dispatch) => {
        try {
            dispatch({
                type: Actions.LOADING_ACTIVE
            })
            const token = await SecureStore.getItemAsync('teacherToken');
            const responceData = await axios.post(`${URL.noticeCreate}`, {
                ...data
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!responceData.data.error) {
                dispatch({
                    type: Actions.NOTICE_ADD,
                    paylode: data
                })
            }
            dispatch({
                type: Actions.LOADING_DONE
            })
        } catch (error) {
            console.dir(error)
            dispatch({
                type: Actions.LOADING_DONE
            })
        }
    }
}

export function CreateExam(data) {
    return async (dispatch) => {
        try {
            dispatch({
                type: Actions.LOADING_ACTIVE
            })
            const token = await SecureStore.getItemAsync('teacherToken');
            const responceData = await axios.post(`${URL.exams}`, {
                ...data
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!responceData.data.error) {
                dispatch({
                    type: Actions.EXAM_ADD,
                    paylode: responceData.data.message
                })
            }
            dispatch({
                type: Actions.LOADING_DONE
            })
        } catch (error) {
            console.dir(error)
            dispatch({
                type: Actions.LOADING_DONE
            })
        }
    }
}

export function FetchExam() {
    return async (dispatch) => {
        try {
            dispatch({
                type: Actions.LOADING_ACTIVE
            })
            const token = await SecureStore.getItemAsync('teacherToken');
            const responceData = await axios.get(`${URL.exams}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(responceData.data);
            if (!responceData.data.error) {
                dispatch({
                    type: Actions.EXAM_FETCH,
                    paylode: responceData.data.data
                })
            }
            dispatch({
                type: Actions.LOADING_DONE
            })
        } catch (error) {
            console.dir(error)
            dispatch({
                type: Actions.LOADING_DONE
            })
        }
    }
}
