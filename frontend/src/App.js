import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppRouter from './AppRouter';
import theme from './app/commons/Theme/index';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
