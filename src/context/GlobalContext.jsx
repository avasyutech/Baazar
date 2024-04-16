import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [isSuccessPayment, setIsSuccessPayment] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [searchHistory, setSearchHistory] = useState(() => {
    const search = localStorage.getItem('searchHistory');
    return JSON.parse(search) || [];
  });

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  const values = { isSuccessPayment, setIsSuccessPayment, loginSuccess, setLoginSuccess, searchHistory, setSearchHistory };
  return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>;
};

const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal must be used within a GlobalProvider');
  }
  return context;
};

export { GlobalProvider, useGlobal };
