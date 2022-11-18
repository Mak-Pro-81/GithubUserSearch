import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './styles';
import { ThemeContextProvider, UserContextProvider } from './contexts';
// import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </UserContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
