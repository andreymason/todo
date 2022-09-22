import React from 'react';
import Registration from './components/Registration';
import {store} from './store';
import { Provider } from 'react-redux';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import TasksList from './components/TasksList';

function App() {

  return (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/registration" element={<Registration/>} />
                <Route path="/tasks" element={<TasksList/>} />
            </Routes>
        </BrowserRouter>
    </Provider>
  )
}

export default App;
