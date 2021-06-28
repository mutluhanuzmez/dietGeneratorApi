import { takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";

import {
    authUserSaga,
} from "./auth";

export function* watcher() {
    yield all([
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
    ]);
}