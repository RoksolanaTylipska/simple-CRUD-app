import React, { useContext } from 'react';
import './Article.scss'
import { AppContext } from '../Context/Context';

function Article() {
  const { currentArticle } = useContext(AppContext)

  return (
    <div className='article'>
      <h2 className='article__title'>{currentArticle.title}</h2>
      <p className='article__text'>{currentArticle.body}</p>
    </div>
  );
}

export default Article;