import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const savedColorMode = localStorage.getItem('colorMode');
  const defaultColorMode = savedColorMode || 'light';
  
  const [colorMode, setColorMode] = useState(defaultColorMode);  
  const [loginButton, setLoginButton] = useState(localStorage.getItem('loginStatus'));
  const [loginModalWindow, setLoginModalWindow] = useState(localStorage.getItem('loginStatus'));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [articles, setArticles] = useState([])
  const [currentArticle, setCurrentArticle] = useState({})

  return (
    <AppContext.Provider value={{
      colorMode,
      setColorMode,
      loginButton,
      setLoginButton,
      email,
      setEmail,
      password,
      setPassword,
      loginModalWindow,
      setLoginModalWindow,
      articles,
      setArticles,
      currentArticle,
      setCurrentArticle
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;