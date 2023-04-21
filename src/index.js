import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "video-react/dist/video-react.css"; 
import Test from './test';
import Admin from './components/pages/Admin';
const root = ReactDOM.createRoot(document.getElementById('root'));
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

root.render(
  <ThemeProvider theme={darkTheme}>
  <React.StrictMode>
   <BrowserRouter>
   <App />
   </BrowserRouter>
  </React.StrictMode>
  </ThemeProvider>

);
