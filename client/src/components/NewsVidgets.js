import React, { useEffect, useState } from 'react';
import useContentful from '../contentful/useContentful';

import './styles/NewsVidgets.css'
import ArticleCard from './ArticleCard';

const NewsVidgets = () => {
    const [articles, setArticles] = useState([]);
    const { getArticles } = useContentful();

    useEffect(() => {
        getArticles().then((response) => setArticles(response))
    })

    return (
        <div id='VidgetsBody'>
            {articles.map((article, index) =>  (
                <ArticleCard key={index} article={article}/>
            ))}
        </div>
    );
};

export default NewsVidgets;