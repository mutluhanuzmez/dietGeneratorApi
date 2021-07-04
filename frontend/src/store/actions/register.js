import * as actionTypes from "./actionTypes";

export const registerStart = () => {
    return {
        type: actionTypes.REGISTER_START
    };
};

export const registerSuccess = () => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
    };
};

export const registerFail = error => {
    return {
        type: actionTypes.REGISTER_FAIL,
        error: error
    };
};

export const registerFinish = error => {
    return {
        type: actionTypes.REGISTER_FINISH,
    };
};

export const register = (payload) => {
    return {
        type: actionTypes.REGISTER_USER,
        payload: {
            email: payload.email,
            password: payload.password,
            name: payload.name,
            phone: payload.phone,
            navigateTo: payload.navigateTo
        }
    };
};

export const registerSetName = (name) => {
    return {
        type: actionTypes.REGISTER_SET_NAME,
        name: name,
    };
};

export const registerSetPhone = (phone) => {
    return {
        type: actionTypes.REGISTER_SET_PHONE,
        phone: phone,
    };
};

export const registerSetEmail = (email) => {
    return {
        type: actionTypes.REGISTER_SET_EMAIL,
        email: email,
    };
};

export const registerSetPassword = (password) => {
    return {
        type: actionTypes.REGISTER_SET_PASSWORD,
        password: password,
    };
};

export const registerShowPassword = () => {
    return {
        type: actionTypes.REGISTER_SHOW_PASSWORD,
    };
};

export const registerErrorClean = () => {
    return {
        type: actionTypes.REGISTER_ERROR_CLEAN,
    };
};