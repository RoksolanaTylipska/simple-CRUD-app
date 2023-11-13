import React, { useContext } from 'react';
import './ArticlesItem.scss'
import { AppContext } from '../Context/Context';

import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Link } from 'react-router-dom';

function ArticlesItem({ article, handleDeleteArticle, handleEditeArticle }) {
  const { setCurrentArticle } = useContext(AppContext)

  const { id, title, body } = article

  return (
    <div className='articles-item'>
      <p className='articles-item__title'>{title}</p>
      <Link style={{textDecoration: "none"}} to={'/article'} onClick={setCurrentArticle(article)}>
        <p className='articles-item__body'>{body}</p>
      </Link>

      <div className='articles-item__button-container' >
        <IconButton
          onClick={() => handleEditeArticle(article)}
        >
          <ModeEditIcon />
        </IconButton>
        <IconButton
          className='articles-item__delete'
          edge="end"
          aria-label="delete"
          onClick={() => handleDeleteArticle(id)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ArticlesItem;