import { all } from "redux-saga/effects";
import {authSaga} from "./auth";
import {tasksSaga} from "./tasks";

export function* rootSaga() {
    yield all([authSaga(), tasksSaga(),],);
}
