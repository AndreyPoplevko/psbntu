import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Context } from '..';
import MainPage from '../pages/MainPage';
import { authRoutes, publicRoutes } from '../routes';
import ArticlePage from './ArticlePage';

const AppRouter = () => {
    const {user} = useContext(Context);
    return (
        <div>
            <Routes>
                {user._isAuth ?
                    authRoutes.map(({path, Component}) => 
                    <Route key={path} path={path} element={Component} exact/>
                    )
                :
                    publicRoutes.map(({path, Component}) => 
                        <Route key={path} path={path} element={Component} exact/>
                    )
                }
                <Route path={`/news/:slug`} element={<ArticlePage/>}/>
                <Route path='*' element={<MainPage/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;