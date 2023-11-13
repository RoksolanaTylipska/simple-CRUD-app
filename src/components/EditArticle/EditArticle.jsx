import React, { useState } from 'react';
import './EditArticle.scss'
import { Box, Button, TextField } from '@mui/material';

function EditArticle({
  id,
  title,
  body,
  setEditArticleModalWindow,
  toEditArticle,
  editedArticle,
}) {
  const [error, setError] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newBody, setNewBody] = useState(body);

  const modalWindowStyle = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    border: '2px solid rgb(207, 203, 203)',
    boxShadow: 24,
    p: 4,
  };

  const handleAddArticleClick = () => {
    if (newTitle.trim() === '') {
      setError(true);
      return;
    }
    const currentArticle = {
      id: editedArticle.id,
      title: newTitle,
      body: newBody,
    };

    toEditArticle(currentArticle);
  };

  return (
    <Box sx={modalWindowStyle}>
      <p style={{ alignItems: 'center', fontSize: '30px' }}>Edit Article</p>
      <TextField
        label="Title"
        value={newTitle}
        error={error}
        helperText={error ? "Title can't be empty" : ''}
        sx={{ width: '100%' }}
        onChange={(ev) => {
          setNewTitle(ev.target.value);
          if (error && ev.target.value.trim() !== '') {
            setError(false);
          }
        }}
        variant="outlined"
        className="articles-list__input"
      />
      <TextField
        label="Body"
        value={newBody}
        sx={{ width: '100%' }}
        onChange={(e) => setNewBody(e.target.value)}
        variant="outlined"
        multiline
        rows={5}
        className="articles-list__input"
      />
      <div className="button-container">
        <Button sx={{ width: '100%' }} variant="contained" onClick={handleAddArticleClick}>
          Save Changes
        </Button>
        <Button
          sx={{ width: '100%' }}
          variant="outlined"
          onClick={() => setEditArticleModalWindow(false)}
        >
          Cancel
        </Button>
      </div>
    </Box>
  );
}

export default EditArticle;