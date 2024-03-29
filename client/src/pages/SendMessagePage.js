import React from 'react';
import ContactsInfo from '../components/ContactsInfo';

import './styles/SendMessagePage.css'

const SendMessagePage = () => {
    return (
        <div>
            <div id='SendMessagePageBody'>
                <form action='' className='ui-form'>
                    <h3><b>Недостаточно информации? Отправьте нам письмо!</b></h3>
                    <div className='form-row'>
                        <input type='text' id='email' required autoComplete='off'/><label htmlFor='email'>Ваш e-mail</label>
                    </div>
                    <div className='form-row'>
                        <input type='text' id='message' required autoComplete='off'/><label htmlFor='message'>Ваше сообщение</label>
                    </div>
                    <p>
                        <input type='button' value='ОТПРАВИТЬ'/>
                    </p>
                </form>
            </div>
            <ContactsInfo/>
        </div>
    );
};

export default SendMessagePage;