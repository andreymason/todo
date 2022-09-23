import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../api';
import {PayloadAction} from "@reduxjs/toolkit";
import Login from "../data/Login";

function* fetchAuth(action : PayloadAction<Login>): any {

    console.log("Start fetchAuth");

    try {

       const {username, password} = action.payload;

       const fetchCall = () => fetch(Api.fetchAuth, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({username, password})
       });

       const authResponse = yield call(fetchCall);

       const json = yield call(() => new Promise( res => res(authResponse.json())));

       console.log(authResponse);
       
       yield put({type: "auth/setToken", token: json});

    } catch (e) {
       console.log(e);
    }
 }


  function* authSaga() {
    yield takeLatest("auth/login", fetchAuth);
  }

  export default authSaga;
