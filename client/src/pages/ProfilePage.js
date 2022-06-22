import React from 'react';
import ContactsInfo from '../components/ContactsInfo';

import './styles/ProfilePage.css'
import avatar_img from './images/Avatar_img.jpg'
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    return (
        <div>
            <div id='ProfileBody'>
                <div id='profile'>
                    <div id='avatar'>
                        <img id='avatar_img' src={avatar_img} alt='avatar'/>
                        <div id='avatar_text'><b>Поплевко Андрей Николаевич</b></div>
                    </div>
                    <div id='profile_info'>
                        <div className='profile_titles'><b>Статус: Разработчик</b></div>
                        <div className='profile_titles'><b>ID: 10542871</b></div>
                        <div className='profile_titles'><b>Профессиональные категории: Программирование</b></div>
                        <div className='profile_titles'><b>Общий рейтинг: 13</b></div>
                    </div>
                    <div id='general_score_btn'>
                        <Link to='/general_score'>Просмотр общего рейтинга</Link>
                    </div>
                </div>
            </div>
            <ContactsInfo/>
        </div>
    );
};

export default ProfilePage;