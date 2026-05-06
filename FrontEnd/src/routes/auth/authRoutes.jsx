import React from 'react';
import {Route} from 'react-router-dom';
import Login from '../../pages/authentication/login';
import Register from '../../pages/authentication/register';
const AuthRoutes = () => {
    return (
       <>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
       
       </>
    );
}

export default AuthRoutes;
