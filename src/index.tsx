import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 프로젝트 전체에 적용됨
import 'sanitize.css'; 
import { GlobalStyle } from './style/global';
import { state, ThemeContext } from './context/themeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);