import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../../pages/main_pages/home';
const MainPagesRoutes = () => {
    return (
        <>
        <Route path="/" element={<Home />} />
        </>
    );
}

export default MainPagesRoutes;
