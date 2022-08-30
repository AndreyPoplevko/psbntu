import React from 'react';
import { Link } from 'react-router-dom';

import './styles/ArticleCard.css'

const ArticleCard = ({ article }) => {
    return (
        <div className='News_Vidgets'>
            <Link to={`/news/${article.slug}`}>
                <div className='img__hover'>
                    <img src={article.background.file.url} className='News_Vidgets__img' alt="img"/>
                </div>
            </Link>
            <span className='News_Vidgets__text'>{article.title}</span>
        </div>
    );
};

export default ArticleCard;