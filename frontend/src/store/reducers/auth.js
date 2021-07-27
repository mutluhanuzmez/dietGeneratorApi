import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    //initial states
    isAuthUser: !!localStorage.getItem("user"),
    email: '',
    password: '',
    isLoggedIn : false,
    error: null,
    errorAlert: null,
    loading: false,
    animate: false,
    secureEntry: true,
    submitButtonText: 'LOGIN',
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const setEmail = ( state, action ) => {
    return updateObject( state, { email: action.email } );
}

const setPassword = ( state, action ) => {
    return updateObject( state, { password: action.password } );
}

const showPassword = ( state ) => {
    return updateObject( state, { secureEntry: !state.secureEntry } );
}

const authSuccess = (state, action) => {
    return updateObject( state, {
        isAuthUser: true,
        isLoggedIn : true,
        error: null,
        loading: false,
        animate:true,
        submitButtonText: ''
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        errorAlert: action.errorAlert,
        error: action.error,
        loading: false,
    });
};

const authFinish = (state, action) => {
    return updateObject( state, {
        errorAlert: null,
        loading: false,
        animate: false,
        secureEntry: true
    });
};

const authErrorClean = (state, action) => {
    return updateObject( state, {
        error: null,
    });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_FINISH: return authFinish(state, action);
        case actionTypes.SET_EMAIL: return setEmail(state, action);
        case actionTypes.SET_PASSWORD: return setPassword(state, action);
        case actionTypes.SHOW_PASSWORD: return showPassword(state, action);
        case actionTypes.AUTH_ERROR_CLEAN: return authErrorClean(state, action);
        default:
            return state;
    }
};

export default reducer;