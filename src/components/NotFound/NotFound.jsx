import React from 'react';
import './NotFound.scss'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const NotFound = () => {
  return (
    <div className='notFound'>
      <h1 className='notFound__title'>404 - Not Found</h1>
      <Link className='notFound__link' to={"/"}>
        <Button sx={{width: "100%"}} variant="contained">
          Go Home
        </Button>
      </Link>
     </div>
  );
};

export default NotFound;