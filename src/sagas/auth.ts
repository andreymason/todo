//import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../api';

function* fetchAuth(action : any): any {

    console.log("Start fetchAuth");

    try {

       const {usename, password} = action.payload;

       const fetchCall = () => fetch(Api.fetchAuth, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({usename, password})
       });

       const authResponse = yield call(fetchCall);

       const json = yield call(() => new Promise( res => res(authResponse.json())));

       console.log(authResponse);
       
       yield put({type: "auth/setToken", token: json});

    } catch (e) {
       console.log(e);
    }
 }


  export function* authSaga() {
    yield takeLatest("auth/login", fetchAuth);
  }