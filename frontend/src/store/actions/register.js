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

export const registerFail = payload => {
    return {
        type: actionTypes.REGISTER_FAIL,
        payload: {
            error : payload.error
        }
    };
};

export const registerFinish = payload => {
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

export const registerSetName = payload => {
    return {
        type: actionTypes.REGISTER_SET_NAME,
        payload: {
            name: payload.name
        }
    };
};

export const registerSetPhone = payload => {
    return {
        type: actionTypes.REGISTER_SET_PHONE,
        payload: {
            phone: payload.phone,
        }
    };
};

export const registerSetEmail = payload => {
    return {
        type: actionTypes.REGISTER_SET_EMAIL,
        payload: {
            email: payload.email,
        }
    };
};

export const registerSetPassword = payload => {
    return {
        type: actionTypes.REGISTER_SET_PASSWORD,
        payload: {
            password: payload.password,
        }
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