import React, {useContext, useState} from 'react';
import {observer} from 'mobx-react-lite';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import './styles/AuthPage.css'
import { AuthRoute, MainRoute } from '../utils/consts.js';
import { login, registration } from '../http/userAPI.js';
import { Context } from '../index.js';

const AuthPage = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation();
    const history = useNavigate();
    const isLogin = location.pathname === AuthRoute;

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const click = async() => {
        try {
            let data;
            if (isLogin) {
                data = await login(id, password)
            } else {
                data = await registration(id, name, password, '', 0, 'Пользователь')
            }
            user.setUser(user);
            user.setIsAuth(true);
            history(MainRoute);
            window.location.reload();
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div>
            <div id='auth-info'>
                <p>Ты никогда не останешьсся один!</p>
            </div>
            <div id='AuthPageBody'>
                {isLogin ?
                    <form className='auth-form'>
                        <h3><b>Авторизация</b></h3>
                        <div className='auth-form-row'>
                            <input type='text' required autoComplete='off' value={id} onChange={e => setId(e.target.value)}/><label htmlFor='email'>Ваш № билета</label>
                        </div>
                        <div className='auth-form-row'>
                            <input type='password' required autoComplete='off' value={password} onChange={e => setPassword(e.target.value)} typeof='password'/><label htmlFor='message'>Ваш пароль</label>
                        </div>
                            <input type='button' value='ВОЙТИ' onClick={() => {
                                click()
                                //user.setIsAuth(true)
                                //window.location = '/'
                            }}/>
                            <p>Нет аккаунта? <Link to='/registration'>Зарегистрируйтесь!</Link></p>
                    </form>
                :
                <form className='auth-form'>
                    <h3><b>Регистрация</b></h3>
                    <div className='auth-form-row'>
                        <input type='text' required autoComplete='off' value={id} onChange={e => setId(e.target.value)}/><label htmlFor='email'>Ваш № билета</label>
                    </div>
                    <div className='auth-form-row'>
                        <input type='text' required autoComplete='off' value={name} onChange={e => setName(e.target.value)}/><label htmlFor='email'>Ваше полное Ф.И.О.</label>
                    </div>
                    <div className='auth-form-row'>
                        <input type='password' required autoComplete='off' value={password} onChange={e => setPassword(e.target.value)} typeof='password'/><label htmlFor='message'>Ваш пароль</label>
                    </div>
                        <input type='button' value='ЗАРЕГИСТРИРОВАТЬСЯ' onClick={() => {
                            click()
                            //user.setIsAuth(true)
                            //window.location = '/'
                        }}/>
                        <p>Есть аккаунт? <Link to='/auth'>Войдите!</Link></p>
                </form>
                }
            </div>
        </div>
    );
});

export default AuthPage;