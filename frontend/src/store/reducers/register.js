import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    //initial states
    email: '',
    password: '',
    name: '',
    phone: '',
    error: null,
    errorAlert: null,
    loading: false,
    animate: false,
    secureEntry: true,
    submitButtonText: 'LOGIN',
};

const registerStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const registerSetName = ( state, action ) => {
    return updateObject( state, { email: action.name } );
}

const registerSetPhone = ( state, action ) => {
    return updateObject( state, { password: action.phone } );
}

const registerSetEmail = ( state, action ) => {
    return updateObject( state, { email: action.email } );
}

const registerSetPassword = ( state, action ) => {
    return updateObject( state, { password: action.password } );
}

const registerShowPassword = ( state ) => {
    return updateObject( state, { secureEntry: !state.secureEntry } );
}

const registerSuccess = (state, action) => {
    return updateObject( state, {
        isLoggedIn : true,
        error: null,
        loading: false,
        animate:true,
        submitButtonText: ''
     } );
};

const registerFail = (state, action) => {
    return updateObject( state, {
        errorAlert: action.errorAlert,
        error: action.error,
        loading: false,
    });
};

const registerFinish = (state, action) => {
    return updateObject( state, {
        errorAlert: null,
        loading: false,
        animate: false,
        secureEntry: true
    });
};

const registerErrorClean = (state, action) => {
    return updateObject( state, {
        error: null,
    });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.REGISTER_START: return registerStart(state, action);
        case actionTypes.REGISTER_SUCCESS: return registerSuccess(state, action);
        case actionTypes.REGISTER_FAIL: return registerFail(state, action);
        case actionTypes.REGISTER_FINISH: return registerFinish(state, action);
        case actionTypes.REGISTER_SET_NAME: return registerSetName(state, action);
        case actionTypes.REGISTER_SET_PHONE: return registerSetPhone(state, action);
        case actionTypes.REGISTER_SET_EMAIL: return registerSetEmail(state, action);
        case actionTypes.REGISTER_SET_PASSWORD: return registerSetPassword(state, action);
        case actionTypes.REGISTER_SHOW_PASSWORD: return registerShowPassword(state, action);
        case actionTypes.REGISTER_ERROR_CLEAN: return registerErrorClean(state, action);
        default:
            return state;
    }
};

export default reducer;