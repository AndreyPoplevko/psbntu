import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles/NavBar.css'
import logo from "./images/logo.png"

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
                            </li>
                            <li>
                                <Link to='/news' className='header_link'>Новости</Link>
                            </li>
                            <li>
                                <Link to='/for_member' className='header_link'>Члену профсоюза</Link>
                            </li>
                            <li>
                                <Link to='/documents' className='header_link'>Документы</Link>
                            </li>
                            <li>
                                <Link to='/galery' className='header_link'>Галерея</Link>
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