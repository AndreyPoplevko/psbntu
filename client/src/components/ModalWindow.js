import React, { useState } from 'react';
import { giveScore } from '../http/userAPI';

import './styles/ModalWindow.css'

const ModalWindow = ({active, setActive}) => {
    const [id, setId] = useState('');
    const [updatedScore, setUpdatedScore] = useState('');

    const click = async() => {
        try {
            let data;
            let id1 = Number(id)
            let updatedScore1 = Number(updatedScore)
            data = await giveScore(id1, updatedScore1)
            console.log(data)
            window.location.reload();
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className={`modal ${active ? 'active' : ''}`} onClick={() => setActive(false)}>
            <div className={`modal__content ${active ? 'active' : ''}`} onClick={e => e.stopPropagation()}>
                <form className='modal-form'>
                    <h3><b>Начислить очки</b></h3>
                    <div className='modal-form-row'>
                        <input type='text' required autoComplete='off' value={id} onChange={e => setId(e.target.value)}/><label htmlFor='№ билета'>№ билета</label>
                    </div>
                    <div className='modal-form-row'>
                        <input type='text' required autoComplete='off' value={updatedScore} onChange={e => setUpdatedScore(e.target.value)}/><label htmlFor='Кол-во очков'>Кол-во очков</label>
                    </div>
                    <input type='button' value='НАЧИСЛИТЬ' onClick={() => click()}/>
                </form>
            </div>
        </div>
    );
};

export default ModalWindow;