import React from 'react';
import { Link } from 'react-router-dom';

import './styles/NavBar.css'
import logo from "./images/logo.png"

const NavBar = () => {
    return (
        <header>
            <Link id='MainPageLink' to='/'><img id='BtnImg' src={logo} alt='logo'/></Link>
            <nav>
                <Link to='/about' id='about_link'>
                    <button className='Links'>О нас</button>
                    <div id='about_links'>
                        <Link to='/about/information'><button className='about_btns'>Информация</button></Link>
                        <Link to='/about/history'><button className='about_btns'>История</button></Link>
                        <Link to='/about/structure'><button className='about_btns'>Структура</button></Link>
                        <Link to='/about/projects'><button className='about_btns'>Проекты</button></Link>
                        <Link to='/about/statute'><button className='about_btns'>Устав</button></Link>
                        <Link to='/about/symbols'><button className='about_btns'>Символика</button></Link>
                    </div>
                </Link>
                <Link to='/news'><button className='Links'>Новости</button></Link>
                <Link to='/for_member' id='for_member_link'>
                    <button className='Links'>Члену профсоюза</button>
                    <div id='for_member_links'>
                        <Link to='/for_member/social_protection'><button className='for_member_btns'>Социальная защита</button></Link>
                        <Link to='/for_member/material_help'><button className='for_member_btns'>Материальная помощь</button></Link>
                        <Link to='/for_member/petitions'><button className='for_member_btns'>Ходатайства</button></Link>
                        <Link to='/for_member/house_question'><button className='for_member_btns'>Вопрос с жильём</button></Link>
                        <Link to='/for_member/seminars'><button className='for_member_btns'>Юридические и обучающие семинары</button></Link>
                        <Link to='/for_member/vacancies'><button className='for_member_btns'>Актуальные вакансии</button></Link>
                    </div>
                </Link>
                <Link to='/documents' id='documents_link'>
                    <button className='Links'>Документы</button>
                    <div id='documents_links'>
                        <Link to='/documents/normative_acts'><button className='documents_btns'>Нормативные правовые акты Республики Беларусь</button></Link>
                        <Link to='/documents/local_acts'><button className='documents_btns'>Локальные правовые акты ППО студентов БНТУ</button></Link>
                    </div>
                </Link>
                <Link to='/galery'><button className='Links'>Галерея</button></Link>
                <Link to='/contacts'><button className='Links'>Контакты</button></Link>
            </nav>
        </header>
    );
};

export default NavBar;