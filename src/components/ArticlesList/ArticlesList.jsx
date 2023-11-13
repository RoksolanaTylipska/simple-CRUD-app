import React, { useContext, useEffect, useState } from 'react';
import './ArticlesList.scss'
import { AppContext } from '../Context/Context';
import { Button, Modal } from '@mui/material';
import NewArticle from '../NewArticle/NewArticle';
import ArticlesItem from '../ArticlesItem/ArticlesItem';
import EditArticle from '../EditArticle/EditArticle';

function ArticlesList() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [newArticleModalWindow, setNewArticleModalWindow] = useState(false);
  const [editArticleModalWindow, setEditArticleModalWindow] = useState(false);
  const [editedArticle, setEditedArticle] = useState({});

  const { articles, setArticles } = useContext(AppContext);

  useEffect(() => {
    const storedArticles = localStorage.getItem('articles');
    if (storedArticles) {
      setArticles(JSON.parse(storedArticles));
    }
  }, [setArticles]);

  const handleAddArticle = () => {
    const newArticle = {
      id: Math.random(),
      title,
      body,
    };

    localStorage.setItem('articles', JSON.stringify([...articles, newArticle]));
    setArticles([...articles, newArticle]);
    setTitle('');
    setBody('');
    setNewArticleModalWindow(false);
  };

  const handleDeleteArticle = (id) => {
    let filteredArticles = articles.filter(article => article.id !== id)
    localStorage.setItem('articles', JSON.stringify(filteredArticles));
    setArticles(filteredArticles)
  }

  const handleEditeArticle = (article) => {
    setEditArticleModalWindow(true);
    setEditedArticle(article);
  };

  const toEditArticle = (сurrentArticle) => {
    console.log(editedArticle)
    console.log(сurrentArticle)

    const updatedArticles = articles.map(article => {
      if (article.id === сurrentArticle.id) {
        return сurrentArticle;
      }
      return article;
    });

    localStorage.setItem('articles', JSON.stringify(updatedArticles));
    setArticles(updatedArticles);
    setEditArticleModalWindow(false);
  };

  return (
    <div className='articles-list'>
      {articles.length === 0
        ? <p className='articles-list__text'>You don't have any articles yet...</p>
        : (
          <ul className='articles-list__items-container'>
            {articles.map(article => (
              <li className='articles-list__item' key={article.id}>
                <ArticlesItem
                  article={article}
                  handleDeleteArticle={handleDeleteArticle}
                  handleEditeArticle={handleEditeArticle}
                />
              </li>
            ))}
          </ul>
        )
      }
      <Button
        sx={{ width: '200px', marginTop: "20px" }}
        variant='contained'
        onClick={() => setNewArticleModalWindow(true)}
      >
        Create an Article
      </Button>

      <Modal open={editArticleModalWindow} onClose={() => setEditArticleModalWindow(false)}>
        <EditArticle
          title={editedArticle.title}
          body={editedArticle.body}
          editedArticle={editedArticle}
          setEditArticleModalWindow={setEditArticleModalWindow}
          toEditArticle={toEditArticle}
        />
      </Modal>

      <Modal open={newArticleModalWindow} onClose={() => setNewArticleModalWindow(false)}>
        <NewArticle
          title={title}
          setTitle={setTitle}
          body={body}
          setBody={setBody}
          setNewArticleModalWindow={setNewArticleModalWindow}
          handleAddArticle={handleAddArticle}
        />
      </Modal>
    </div>
  );
}

export default ArticlesList;