import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import { AppContext } from './components/Context/Context';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ArticlesList from './components/ArticlesList/ArticlesList';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Article from './components/Article/Article';

function AppRouter() {
  const { colorMode } = useContext(AppContext);

    const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#2196f3',
      },
      background: {
        paper: '#fff',
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      background: {
        paper: '#121212',
      },
    },
  });

  const theme = colorMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/article" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default AppRouter;