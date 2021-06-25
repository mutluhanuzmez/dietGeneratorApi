import * as actionTypes from "./actionTypes";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = () => {
    return {
        type: actionTypes.AUTH_SUCCESS,
    };
};

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const authFinish = error => {
    return {
        type: actionTypes.AUTH_FINISH,
    };
};

export const auth = (email, password, navigateTo) => {
    return {
        type: actionTypes.AUTH_USER,
        email: email,
        password: password,
        navigateTo: navigateTo
    };
};

export const setEmail = (email) => {
    return {
        type: actionTypes.SET_EMAIL,
        email: email,
    };
};

export const setPassword = (password) => {
    return {
        type: actionTypes.SET_PASSWORD,
        password: password,
    };
};

export const showPassword = () => {
    return {
        type: actionTypes.SHOW_PASSWORD,
    };
};

export const authErrorClean = () => {
    return {
        type: actionTypes.AUTH_ERROR_CLEAN,
    };
};