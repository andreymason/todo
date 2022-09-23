//import Task  from '../data/Task';
import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../api';

function* fetchTasks(): any {

    console.log("fetchTasks start");

    try {

       const fetchCall = () => fetch(Api.fetchTasks);

       const tasks = yield call(fetchCall);

       console.log(fetchCall);
       console.log(tasks);

       yield put({type: "tasks/setTasks", tasks: tasks});

    } catch (e) {
       console.log(e);
    }
 }


  export function* tasksSaga() {
    yield takeLatest("tasks/fetchTasks", fetchTasks);
  }


  