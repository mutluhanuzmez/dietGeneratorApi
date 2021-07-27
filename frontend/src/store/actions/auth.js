import * as actionTypes from "./actionTypes";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = payload => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            data: payload.data
        }
    };
};

export const authFail = payload => {
    return {
        type: actionTypes.AUTH_FAIL,
        payload: {
            error: payload.error
        }
    };
};

export const authFinish = () => {
    return {
        type: actionTypes.AUTH_FINISH,
    };
};

export const auth = payload => {
    return {
        type: actionTypes.AUTH_USER,
        payload: {
            email: payload.email,
            password: payload.password,
            navigateTo: payload.navigateTo
        }
    };
};

export const setEmail = payload => {
    return {
        type: actionTypes.SET_EMAIL,
        payload: {
            email: payload.email
        }

    };
};

export const setPassword = payload => {
    return {
        type: actionTypes.SET_PASSWORD,
        payload: {
            password: payload.password
        }
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

export const authLogOut = () => {
    return {
        type: actionTypes.AUTH_LOG_OUT,
    };
};