import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
    const isAuth = false
    return (
        <div>
            <Routes>
                {isAuth && authRoutes.map(({path, Component}) => 
                    <Route key={path} path={path} element={Component} exact/>
                )}
                {publicRoutes.map(({path, Component}) => 
                    <Route key={path} path={path} element={Component} exact/>
                )}
                <Route path='*' element={<MainPage/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;