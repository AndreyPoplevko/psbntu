import React from 'react';
import { Link } from 'react-router-dom';

import './styles/NavBar.css'
import logo from "./images/logo.png"

const NavBar = () => {
    return (
        <header>
            <Link id='MainPageLink' to='/'><img id='BtnImg' src={logo}/></Link>
            <nav>
                <Link to='/about'><button className='Links'>О нас</button></Link>
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
                <Link to='/documents'><button className='Links'>Документы</button></Link>
                <Link to='/galery'><button className='Links'>Галерея</button></Link>
                <Link to='/contacts'><button className='Links'>Контакты</button></Link>
            </nav>
        </header>
    );
};

export default NavBar;