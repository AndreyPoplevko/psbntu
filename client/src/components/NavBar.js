import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles/NavBar.css';
import logo from "./images/logo.png";

const NavBar = () => {
    const [className, setClassName] = useState(false);
    const [classNameApp, setClassNameApp] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('lock', isOpen);
    }, [isOpen]);

    function set() {
        setClassName(prev => !prev);
        setIsOpen(!isOpen);
    };

    function setApp() {
        const Apps = document.getElementsByClassName('Dock')[0]
        if (classNameApp) {
            Apps.classList.remove('active')
            setClassNameApp(false);
        } else {
            Apps.classList.add('active')
            setClassNameApp(true);
        }
    };

    window.onscroll = function() {scroll()};

    function scroll() {
        if (window.screen.width > 1436) {
            if (document.body.scrollTop > 190 || document.documentElement.scrollTop > 190) {
                document.getElementById("header__body").style.height = "30px";
                document.getElementById("header__logo").style.height = "30px";
                document.getElementById("header__logo").style.width = "55px";
                let menus_list = document.getElementsByClassName("sub-header__list");
                for(let i=0; i<menus_list.length; i++) {
                    menus_list[i].style.top = "24px";
                }
                let links_list = document.getElementsByClassName("header__link");
                for(let i=0; i<links_list.length; i++) {
                    links_list[i].style.paddingBottom = "7px";
                }
            } else {
                document.getElementById("header__body").style.height = "60px";
                document.getElementById("header__logo").style.height = "50px";
                document.getElementById("header__logo").style.width = "85px";
                let menus_list = document.getElementsByClassName("sub-header__list");
                for(let i=0; i<menus_list.length; i++) {
                    menus_list[i].style.top = "39px";
                }
                let links_list = document.getElementsByClassName("header__link");
                for(let i=0; i<links_list.length; i++) {
                    links_list[i].style.paddingBottom = "22px";
                }
            }
        } else {
            document.getElementById("header__body").style.height = "50px";
            document.getElementById("header__logo").style.height = "40px";
            document.getElementById("header__logo").style.width = "65px";
        }
    };

    let isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
            );
        }
    };

    let body = document.querySelector('body');
    if(isMobile.any()) {
        body.classList.add('touch');

        let arrows = document.querySelectorAll('.arrow');
        for(let i=0; i<arrows.length; i++) {
            let thisLink = arrows[i].previousElementSibling;
            thisLink.classList.add('parent');
        };
    } else {
        body.classList.add('mouse');
    };

    return (
        <header>
            <div id="container">
                <div id="header__body">
                    <Link to='/'><img src={logo} id="header__logo" alt="img"/></Link>
                    <div className={`header__apps ${classNameApp ? 'active' : ''}`} onClick={() => setApp()}>
                        <div className="AppsLogo">
                            <div className="squares" id='squares1'></div>
                            <div className="squares" id='squares2'></div>
                            <div className="squares" id='squares3'></div>
                            <div className="squares" id='squares4'></div>
                        </div>
                    </div>
                    <div className={`header__burger ${className ? 'active' : ''}`} onClick={() => set()}>
                        <span></span>
                    </div>
                    <nav className={`header__menu ${className ? 'active' : ''}`}>
                        <ul id="header__list">
                            <li>
                                <Link to='' className='header__link'>О нас</Link>
                                <span className='header__arrow arrow' onClick={
                                    function(e) {
                                        let subMenu = e.target.nextElementSibling;
                                        subMenu.classList.toggle('open');
                                        e.target.classList.toggle('active');
                                        let arrows = document.querySelectorAll('.arrow');
                                        let subMenus = document.querySelectorAll('.sub-header__list');
                                        arrows[1].classList.remove('active');
                                        arrows[2].classList.remove('active');
                                        arrows[3].classList.remove('active');
                                        arrows[4].classList.remove('active');
                                        arrows[5].classList.remove('active');
                                        subMenus[1].classList.remove('open');
                                        subMenus[2].classList.remove('open');
                                        subMenus[3].classList.remove('open');
                                        subMenus[4].classList.remove('open');
                                        document.getElementsByClassName('sub-sub-header__list')[0].classList.remove('open');
                                    }
                                }></span>
                                <ul className='sub-header__list'>
                                    <li>
                                        <Link to='/about/structure' className='sub-header__link'>Структура</Link>
                                    </li>
                                    <li>
                                        <Link to='/about/activities' className='sub-header__link'>Направления деятельности</Link>
                                    </li>
                                    <li>
                                        <Link to='/about/projects' className='sub-header__link'>Проекты</Link>
                                    </li>
                                    <li>
                                        <Link to='/about/work_in_comissions' className='sub-header__link'>Участие в работе Советов и Комиссий</Link>
                                    </li>
                                    <li>
                                        <Link to='/about/seminars' className='sub-header__link'>Юридические и обучающие семинары</Link>
                                    </li>
                                    <li>
                                        <Link to='/about/events_organization' className='sub-header__link'>Организация и проведение мероприятий</Link>
                                    </li>
                                    <li>
                                        <Link to='/about/new_year_gifts' className='sub-header__link'>Обеспечение новогодними подарками</Link>
                                    </li>
                                    <li>
                                        <Link to='/about/sales' className='sub-header__link'>Предоставление скидок со сформированной стоимости обучения</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/news' className='header__link'>Новости</Link>
                            </li>
                            <li>
                                <Link to='/social_protection' className='header__link'>Социальная защита</Link>
                                <span className='header__arrow arrow' onClick={
                                    function(e) {
                                        let subMenu = e.target.nextElementSibling;
                                        subMenu.classList.toggle('open');
                                        e.target.classList.toggle('active');
                                        let arrows = document.querySelectorAll('.arrow');
                                        let subMenus = document.querySelectorAll('.sub-header__list');
                                        arrows[0].classList.remove('active');
                                        arrows[1].classList.remove('active');
                                        arrows[3].classList.remove('active');
                                        arrows[4].classList.remove('active');
                                        arrows[5].classList.remove('active');
                                        subMenus[0].classList.remove('open');
                                        subMenus[2].classList.remove('open');
                                        subMenus[3].classList.remove('open');
                                        subMenus[4].classList.remove('open');
                                        document.getElementsByClassName('sub-sub-header__list')[0].classList.remove('open');
                                    }
                                }></span>
                                <ul className='sub-header__list'>
                                    <li>
                                        <Link to='/social_protection/social_scholarship' className='sub-header__link'>Социальная стипендия</Link>
                                    </li>
                                    <li>
                                        <Link to='/social_protection/accomodation' className='sub-header__link'>Вопрос с жильём</Link>
                                    </li>
                                    <li>
                                        <Link to='/social_protection/material_help' className='sub-header__link'>Материальная помощь</Link>
                                    </li>
                                    <li>
                                        <Link to='/social_protection/improve_soc-eco_situation' className='sub-header__link'>Улучшение социально-экономического положения</Link>
                                    </li>
                                    <li>
                                        <Link to='/social_protection/how_to_get_room' className='sub-header__link'>Как получить место в общежитии</Link>
                                    </li>
                                    <li>
                                        <Link to='/social_protection/accomodation' className='sub-header__link'>Предоставление мест проживания</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/for_activists' className='header__link'>Хочу быть активистом</Link>
                            </li>
                            <li>
                                <Link to='/for_applicant' className='header__link'>Абитуриенту</Link>
                            </li>
                            <li>
                                <Link to='' className='header__link'>Оздоровление</Link>
                                <span className='header__arrow arrow' onClick={
                                    function(e) {
                                        let subMenu = e.target.nextElementSibling;
                                        subMenu.classList.toggle('open');
                                        e.target.classList.toggle('active');
                                        let arrows = document.querySelectorAll('.arrow');
                                        let subMenus = document.querySelectorAll('.sub-header__list');
                                        arrows[0].classList.remove('active');
                                        arrows[1].classList.remove('active');
                                        arrows[2].classList.remove('active');
                                        arrows[4].classList.remove('active');
                                        arrows[5].classList.remove('active');
                                        subMenus[0].classList.remove('open');
                                        subMenus[1].classList.remove('open');
                                        subMenus[3].classList.remove('open');
                                        subMenus[4].classList.remove('open');
                                        document.getElementsByClassName('sub-sub-header__list')[0].classList.remove('open');
                                    }
                                }></span>
                                <ul className='sub-header__list'>
                                    <li>
                                        <Link to='/recovery/profilak' className='sub-header__link'>Санаторий-профилакторий</Link>
                                    </li>
                                    <li>
                                        <Link to='/recovery/FPB_sanatoriums' className='sub-header__link'>Санатории ФПБ</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/events' className='header__link'>Мероприятия</Link>
                            </li>
                            <li>
                                <Link to='' className='header__link'>Вакансии</Link>
                                <span className='header__arrow arrow' onClick={
                                    function(e) {
                                        let subMenu = e.target.nextElementSibling;
                                        subMenu.classList.toggle('open');
                                        e.target.classList.toggle('active');
                                        let arrows = document.querySelectorAll('.arrow');
                                        let subMenus = document.querySelectorAll('.sub-header__list');
                                        arrows[0].classList.remove('active');
                                        arrows[1].classList.remove('active');
                                        arrows[2].classList.remove('active');
                                        arrows[3].classList.remove('active');
                                        arrows[5].classList.remove('active');
                                        subMenus[0].classList.remove('open');
                                        subMenus[1].classList.remove('open');
                                        subMenus[2].classList.remove('open');
                                        subMenus[4].classList.remove('open');
                                        document.getElementsByClassName('sub-sub-header__list')[0].classList.remove('open');
                                    }
                                }></span>
                                <ul className='sub-header__list'>
                                    <li>
                                        <Link to='/vacancies/employment' className='sub-header__link'>Организация трудоустройства</Link>
                                    </li>
                                    <li>
                                        <Link to='/vacancies/for_employers' className='sub-header__link'>Работодателям</Link>
                                    </li>
                                    <li>
                                        <Link to='/vacancies/send_message' className='sub-header__link'>Отправить письмо</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/discount' className='header__link'>Дисконтная программа</Link>
                            </li>
                            <li>
                                <Link to='/documents' className='header__link'>Документы</Link>
                            </li>
                            <li>
                                <Link to='/contacts' className='header__link'>Контакты</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default NavBar;