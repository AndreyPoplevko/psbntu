import React from 'react';
import NavBar from '../components/NavBar';
import ContactsInfo from '../components/ContactsInfo';

import './styles/ProfilePage.css'
import avatar_img from './Avatar_img.jpg'

const ProfilePage = () => {
    return (
        <div>
            <NavBar/>
            <div id='ProfileBody'>
                <div id='profile'>
                    <div id='avatar'>
                        <img id='avatar_img' src={avatar_img}/>
                        <div id='avatar_text'><b>Поплевко Андрей Николаевич</b></div>
                    </div>
                    <div id='profile_info'>
                        <div className='profile_titles'><b>Статус: Разработчик</b></div>
                        <div className='profile_titles'><b>ID: 73671133</b></div>
                        <div className='profile_titles'><b>Профессиональные категории: Программирование</b></div>
                        <div className='profile_titles'><b>Общий рейтинг: 13</b></div>
                    </div>
                </div>
            </div>
            <ContactsInfo/>
        </div>
    );
};

export default ProfilePage;