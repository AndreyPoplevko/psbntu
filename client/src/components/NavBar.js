import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles/NavBar.css'
import logo from "./images/logo.png"
import arrow from "./images/arrow.png"

const NavBar = () => {
    const [className, setClassName] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        document.body.classList.toggle('lock', isOpen);
    }, [isOpen])

    function set() {
        setClassName(prev => !prev)
        setIsOpen(!isOpen)
    }

    return (
        <header>
            <div id="container">
                <div id="header__body">
                    <Link to='/'><img src={logo} id="header__logo" alt="img"/></Link>
                    <div className={`header__burger ${className ? 'active' : ''}`} onClick={() => set()}>
                        <span></span>
                    </div>
                    <nav className={`header__menu ${className ? 'active' : ''}`} onClick={() => set()}>
                        <ul id="header__list">
                            <li>
                                <Link to='/about' className='header_link'>О нас</Link>
                                <ul className='sub-header__list'>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Структура</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Проекты</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Социальная защита</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Участие в работе Советов и Комиссий</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Материальная помощь</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Юридические и обучающие семинары</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Организация оздоровления</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Организация летнего отдыха</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Организация трудоустройства</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Организация и проведение мероприятий</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Обеспечение новогодними подарками</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Улучшение социально-экономического положения</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Предоставление скидок</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Предоставление мест проживания</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Профилакторий</Link>
                                        <ul className='sub-sub-header__list'>
                                            <li>
                                                <Link to='/' className='sub-sub-header__link'>Структура</Link>
                                            </li>
                                            <li>
                                                <Link to='/' className='sub-sub-header__link'>Основные направления</Link>
                                            </li>
                                            <li>
                                                <Link to='/' className='sub-sub-header__link'>Награды</Link>
                                            </li>
                                            <li>
                                                <Link to='/' className='sub-sub-header__link'>Устав</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/news' className='header_link'>Новости</Link>
                            </li>
                            <li>
                                <Link to='/social_protection' className='header_link'>Соц. защита</Link>
                                <ul className='sub-header__list'>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Соц. стипендия</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Вопрос с жильём</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Материальная помощь</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Как получить место в общежитии</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/for_activists' className='header_link'>Хочу быть активистом</Link>
                            </li>
                            <li>
                                <Link to='/for_applicant' className='header_link'>Абитуриенту</Link>
                            </li>
                            <li>
                                <Link to='/recovery' className='header_link'>Оздоровление</Link>
                                <ul className='sub-header__list'>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Санаторий-профилакторий</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Санатории ФПБ</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/events' className='header_link'>Мероприятия</Link>
                            </li>
                            <li>
                                <Link to='/vacancies' className='header_link'>Вакансии</Link>
                                <ul className='sub-header__list'>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Работодателям</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Отправить письмо</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/discount' className='header_link'>Дисконтная программа</Link>
                            </li>
                            <li>
                                <Link to='/good_to_know' className='header_link'>Полезно знать</Link>
                                <ul className='sub-header__list'>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Документы</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='sub-header__link'>Материальная помощь</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/contacts' className='header_link'>Контакты</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default NavBar;