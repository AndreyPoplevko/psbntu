import React from 'react';

import './styles/ContactsInfo.css'
import VK_img from './images/VK_img.png'
import Inst_img from './images/Inst_img.png'
import TG_img from './images/TG_img.png'
import BNTU_img from './images/BNTU_img.png'
import EDU_img from './images/EDU_img.jpg'
import FPB_img from './images/FPB_img.jpg'
import FAQ_img from './images/FAQ_img.jpg'
import { Link } from 'react-router-dom';

const ContactsInfo = () => {
    return (
        <div>
            <footer>
                <div id='SocialNetworkInfo'>
                    <div id='SN_Text'><b>Полезные ссылки:</b></div>
                    <hr/>
                </div>
                <div id='footer_dock'>
                    <a href='https://vk.com/psbntu'>
                        <img className='DockImgs' id='VK_img' src={VK_img} alt='VK_image'/>
                    </a>
                    <a href='https://www.instagram.com/psbntu/'>
                        <img className='DockImgs' id='Inst_img' src={Inst_img} alt='Inst_image'/>
                    </a>
                    <a href='https://t.me/psbntuby'>
                        <img className='DockImgs' id='TG_img' src={TG_img} alt='TG_image'/>
                    </a>
                    <a href='https://bntu.by'>
                        <img className='DockImgs' id='BNTU_img' src={BNTU_img} alt='BNTU_image'/>
                    </a>
                    <a href='https://estu.1prof.by'>
                        <img className='DockImgs' id='EDU_img' src={EDU_img} alt='EDU_image'/>
                    </a>
                    <a href='https://fpb.1prof.by'>
                        <img className='DockImgs' id='FPB_img' src={FPB_img} alt='FPB_image'/>
                    </a>
                    <Link to='/FAQ'>
                        <img className='DockImgs' id='FAQ_img' src={FAQ_img} alt='FAQ_image'/>
                    </Link>
            </div>
            </footer>
            <div id='Dock'>
                    <a href='https://vk.com/psbntu'>
                        <img className='DockImgs' id='VK_img' src={VK_img} alt='VK_image'/>
                    </a>
                    <a href='https://www.instagram.com/psbntu/'>
                        <img className='DockImgs' id='Inst_img' src={Inst_img} alt='Inst_image'/>
                    </a>
                    <a href='https://t.me/psbntuby'>
                        <img className='DockImgs' id='TG_img' src={TG_img} alt='TG_image'/>
                    </a>
                    <a href='https://bntu.by'>
                        <img className='DockImgs' id='BNTU_img' src={BNTU_img} alt='BNTU_image'/>
                    </a>
                    <a href='https://estu.1prof.by'>
                        <img className='DockImgs' id='EDU_img' src={EDU_img} alt='EDU_image'/>
                    </a>
                    <a href='https://fpb.1prof.by'>
                        <img className='DockImgs' id='FPB_img' src={FPB_img} alt='FPB_image'/>
                    </a>
                    <a href='https://bntu.by'>
                        <img className='DockImgs' id='FAQ_img' src={FAQ_img} alt='FAQ_image'/>
                    </a>
            </div>
        </div>
    );
};

export default ContactsInfo;