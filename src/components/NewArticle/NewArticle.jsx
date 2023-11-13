import React, { useState } from 'react';
import './NewArticle.scss'
import { Box, Button, TextField } from '@mui/material';

function NewArticle({
  title,
  setTitle,
  body,
  setBody,
  setNewArticleModalWindow,
  handleAddArticle
}) {
  const [error, setError] = useState(false);

  const modalWindowStyle = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "40%",
    bgcolor: 'background.paper',
    border: '2px solid rgb(207, 203, 203)',
    boxShadow: 24, p: 4
  }

  const handleAddArticleClick = () => {
    if (title.trim() === '') {
      setError(true);
    } else {
      setError(false);
      handleAddArticle();
    }
  }

  return (
    <Box sx={modalWindowStyle}>
      <p style={{ alignItems: "center", fontSize: "30px" }}>New Article</p>
      <TextField
        label='Title'
        value={title}
        error={error}
        helperText={error ? "Title cannot be empty" : ""}
        sx={{ width: '100%' }}
        onChange={(ev) => {
          setTitle(ev.target.value);
          if (error && ev.target.value.trim() !== '') {
            setError(false);
          }
        }}
        variant='outlined'
      />
      <TextField
        label='Body'
        value={body}
        sx={{ width: '100%' }}
        onChange={(e) => setBody(e.target.value)}
        variant='outlined'
        multiline
        rows={5}
      />
      <div className='buttom-container'>
        <Button
          sx={{ width: '30%' }}
          variant='contained'
          onClick={handleAddArticleClick}
        >
          Submit
        </Button>
        <Button
          sx={{ width: '30%' }}
          variant='outlined'
          onClick={() => setNewArticleModalWindow(false)}
        >
          Cancel
        </Button>
      </div>
    </Box>
  );
}

export default NewArticle;