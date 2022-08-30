import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import './styles/ArticlePage.css'
import ContactsInfo from './ContactsInfo';

const ArticlePage = () => {
    const [article, setArticle] = useState([])
    const [img, setImg] = useState()

    const client = createClient({
        space: "73krgvujqgfj",
        accessToken: "z0apGS9idS1_QuS1M9E2WcdIglYsNuN-NnQFg0fPaWQ"
    });
    
    const { slug } = useParams();

    useEffect(() => {
        const getEntryById = async() => {
            try {
                await client.getEntries({
                    content_type: 'article',
                    'fields.slug[in]': slug,
                }).then((entries) => {
                    setArticle(entries.items[0].fields)
                    setImg(entries.items[0].fields.background.fields.file.url)
                })
            } catch(error) {
                console.log(error)
            }
        }

        getEntryById()
    })

    return (
        <div id='ArticlePageBody'>
            <div id='ArticlePageTitle'>
                <h1>{article.title}</h1>
            </div>
            <div id='ArticlePageImage'>
                <img src={img}></img>
            </div>
            <div id='ArticlePageContent'>
                {documentToReactComponents(article.content)}
            </div>
            <ContactsInfo/>
        </div>
    );
};

export default ArticlePage;