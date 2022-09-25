import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import {useSelector} from '../store';

const PrivateRoute = () => {
    const token = useSelector(state => state.auth.token);

    return token ? <Outlet /> : <Navigate to="/"/>;

}

export default PrivateRoute;