import { put, delay } from "redux-saga/effects";
import axios from "axios";
import { URL, to } from "../../shared/utility";

import * as actions from "../actions";


export function* registerUserSaga(action) {
  console.log('TEST')
  console.log(action);
  yield put(actions.registerStart());
    let credentials = {
      email : action.payload.email, 
      password : action.payload.password,
      phone: action.payload.phone,
      name: action.payload.name
    }

    let err, data;
    [err , data] = yield to(axios.post( URL + 'auth/register', credentials ));
    if(err || data === "undefined"){
      yield put(actions.registerFail(err));
    }else{
      yield put(actions.registerSuccess(data));
      yield delay(200);
    }

    yield put(actions.registerFinish());
    yield delay(3000);
    yield put(actions.registerErrorClean());

}