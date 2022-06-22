import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Context } from '..';
import MainPage from '../pages/MainPage';
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
    const {user} = useContext(Context);
    console.log(user)
    return (
        <div>
            <Routes>
                {user.isAuth && authRoutes.map(({path, Component}) => 
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