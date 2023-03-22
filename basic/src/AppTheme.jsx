import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import '../src/AppTheme.css';
import { DarkModeProvider } from './context/DarkModeContext';

const AppTheme = () => {
  return (
    <DarkModeProvider>
      <Header />
      <Main />
      <Footer />
    </DarkModeProvider>
  );
};

export default AppTheme;
