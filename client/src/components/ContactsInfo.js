import React from 'react';

import './styles/ContactsInfo.css'
import VK_img from './images/VK_img.png'
import Inst_img from './images/Inst_img.png'
import TG_img from './images/TG_img.png'
import BNTU_img from './images/BNTU_img.jpg'

const ContactsInfo = () => {
    return (
        <footer>
            <div id='SocialNetworkInfo'>
                <div id='SN_Text'><b>Мы в соц сетях:</b></div>
                <hr/>
                <div id='Dock'>
                    <a href='https://vk.com/psbntu'>
                        <img className='DockImgs' id='VK_img' src={VK_img}/>
                    </a>
                    <a href='https://www.instagram.com/psbntu/'>
                        <img className='DockImgs' id='Inst_img' src={Inst_img}/>
                    </a>
                    <a href='https://t.me/psbntuby'>
                        <img className='DockImgs' id='TG_img' src={TG_img}/>
                    </a>
                    <a href='https://bntu.by'>
                        <img className='DockImgs' id='BNTU_img' src={BNTU_img}/>
                    </a>
                </div>
                <div id='footer_text'>Первичная профсоюзная организация студентов БНТУ.
                    <br/>
                г. Минск, ул. Якуба Коласа 22/3 (Корпус №13), каб. 110</div>
                <hr/>
                <div id='c_text'>© Первичная профсоюзная организация студентов Белорусского национального технического университета, 2022</div>
            </div>
        </footer>
    );
};

export default ContactsInfo;