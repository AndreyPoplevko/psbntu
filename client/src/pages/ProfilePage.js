import React from 'react';
import ContactsInfo from '../components/ContactsInfo';

import './styles/ProfilePage.css'
import avatar_img from './images/Avatar_img.jpg'
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const ProfilePage = () => {
    const user = jwt_decode(localStorage.getItem('token'))
    console.log(user)
    return (
        <div>
            <div id='ProfileBody'>
                <div id='profile'>
                    <div id='avatar'>
                        <img id='avatar_img' src={avatar_img} alt='avatar'/>
                        <div id='avatar_text'><b>{user.name}</b></div>
                    </div>
                    <div id='profile_info'>
                        <div className='profile_titles'><b>Статус: {user.role}</b></div>
                        <div className='profile_titles'><b>ID: {user.id}</b></div>
                        <div className='profile_titles'><b>Профессиональные категории: {user.categories}</b></div>
                        <div className='profile_titles'><b>Общий рейтинг: {user.score}</b></div>
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