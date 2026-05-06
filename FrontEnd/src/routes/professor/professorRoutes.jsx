import React from 'react';
import {Route} from 'react-router-dom';
import ProfessorDashboard from '../../pages/professor/dashboard';
const ProfessorRoutes = () => {
    return (
        <>
        <Route path='/professor/dashboard' element={<ProfessorDashboard/>} />
        </>
    );
}

export default ProfessorRoutes;
