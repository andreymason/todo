//import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../api';

function* fetchAuth(action : any): any {

    console.log("Start fetchAuth");

    try {

       const {username, password} = action.payload;

       console.log(username + " " + password);

       const fetchCall = () => fetch(Api.fetchAuth, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({username, password})
       });

       const authResponse = yield call(fetchCall);

       const json = yield call(() => new Promise( res => res(authResponse.json())));

       //console.log(authResponse);
       
       yield put({type: "auth/setToken", token: json.token});

       console.log(json.token);
       

    } catch (e) {
       console.log(e);
    }
 }


  export function* authSaga() {

    console.log("Console.log authSAGA");

    yield takeLatest("auth/login", fetchAuth);
  }