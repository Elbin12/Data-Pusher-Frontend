import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import SignupPage from '../Pages/SignupPage';
import ProtectedRoute from './ProtectedRoute';
import AccountsPage from '../Pages/AccountsPage';

function UserRoute(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/login' element={<LoginPage />}/>
                <Route path='/signup' element={<SignupPage />}/>
                <Route path='/accounts' element={<ProtectedRoute><AccountsPage /></ProtectedRoute>}/>
            </Routes>
        </Router>
    )
}

export default UserRoute
