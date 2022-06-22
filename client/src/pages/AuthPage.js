import React, {useContext} from 'react';
import { Context } from '../index.js';
import {observer} from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import './styles/AuthPage.css'

const AuthPage = observer(() => {
    const {user} = useContext(Context)
    let randomText = [
        'Ты никогда не будешь один!',
        'Профсоюз и ты ― наша встреча не случайна!',
        'Как Ваши дела? А с нами будут ещё лучше!',
        'Сегодня прекрасный день. А плохих у нас и не бывает!',
        'Приятно вновь встретить Вас!'
    ]
    let randomNumber = Math.round(Math.random()*(randomText.length-1));
    return (
        <div>
            <div id='auth-info'>
                <p>{randomText[randomNumber]}</p>
            </div>
            <div id='AuthPageBody'>
                <form action='' className='auth-form'>
                    <h3><b>Авторизация</b></h3>
                    <div className='auth-form-row'>
                        <input type='text' id='ticket' required autoComplete='off'/><label htmlFor='email'>Ваш № билета</label>
                    </div>
                    <div className='auth-form-row'>
                        <input type='password' id='password' required autoComplete='off'/><label htmlFor='message'>Ваш пароль</label>
                    </div>
                    <p>
                        <input type='submit' value='ВОЙТИ' onClick={() => {user.setIsAuth(true)
                            //window.location = '/'
                        }}/>
                        <p>Нет аккаунта? <Link to='/registration'>Зарегистрируйтесь!</Link></p>
                    </p>
                </form>
            </div>
        </div>
    );
});

export default AuthPage;