import React from 'react';

import './styles/NewsVidgets.css'
import news_img from './images/news.jpg'
import { Link } from 'react-router-dom';

const NewsVidgets = () => {
    return (
        <div id='VidgetsBody'>
            <div className='News_Vidgets'>
                <Link to='/'>
                    <div className='img__hover'>
                        <img src={news_img} className='News_Vidgets__img' alt="img"/>
                    </div>
                </Link>
                <span className='News_Vidgets__text'>Цеховая (первичная) профсоюзная организация...</span>
            </div>
            <div className='News_Vidgets'>
                <Link to='/'>
                    <div className='img__hover'>
                        <img src={news_img} className='News_Vidgets__img' alt="img"/>
                    </div>
                </Link>
                <span className='News_Vidgets__text'>Цеховая (первичная) профсоюзная организация...</span>
            </div>
            <div className='News_Vidgets'>
                <Link to='/'>
                    <div className='img__hover'>
                        <img src={news_img} className='News_Vidgets__img' alt="img"/>
                    </div>
                </Link>
                <span className='News_Vidgets__text'>Цеховая (первичная) профсоюзная организация...</span>
            </div>
            <div className='News_Vidgets'>
                <Link to='/'>
                    <div className='img__hover'>
                        <img src={news_img} className='News_Vidgets__img' alt="img"/>
                    </div>
                </Link>
                <span className='News_Vidgets__text'>Цеховая (первичная) профсоюзная организация...</span>
            </div>
            <div className='News_Vidgets'>
                <Link to='/'>
                    <div className='img__hover'>
                        <img src={news_img} className='News_Vidgets__img' alt="img"/>
                    </div>
                </Link>
                <span className='News_Vidgets__text'>Цеховая (первичная) профсоюзная организация...</span>
            </div>
            <div className='News_Vidgets'>
                <Link to='/'>
                    <div className='img__hover'>
                        <img src={news_img} className='News_Vidgets__img' alt="img"/>
                    </div>
                </Link>
                <span className='News_Vidgets__text'>Цеховая (первичная) профсоюзная организация...</span>
            </div>
        </div>
    );
};

export default NewsVidgets;