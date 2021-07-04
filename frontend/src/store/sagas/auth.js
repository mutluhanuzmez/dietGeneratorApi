import { put, delay } from "redux-saga/effects";
import axios from "axios";
import { URL, to } from "../../shared/utility";

import * as actions from "../actions";


export function* authUserSaga(action) {
  console.log(action);
  yield put(actions.authStart());
    let credentials = {
      username : action.payload.email, 
      password : action.payload.password
    }

    let err, data;
    [err , data] = yield to(axios.post( URL + 'auth/login', credentials ));

    if(err || data === "undefined"){
      yield put(actions.authFail(err));
    }else{
      yield put(actions.authSuccess(data));
      yield (200);
    }

    yield put(actions.authFinish());
    yield delay(3000);
    yield put(actions.authErrorClean());

}