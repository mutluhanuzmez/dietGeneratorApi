import { takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";

import {
    authUserSaga,
} from "./auth";
import {
    registerUserSaga,
} from "./register";



export function* watcher() {
    yield all([
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.REGISTER_USER, registerUserSaga),
    ]);
}