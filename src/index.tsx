import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

interface brandColors {
  [key: number]: string
}

interface colorInterface {
  brand:brandColors
}


const colors:colorInterface = {
  brand: {
    100: '#292929',
    200: '#FFFFFF',
    300: '#000000',
  }
}


const theme = extendTheme({ colors })


ReactDOM.render(
  <ChakraProvider theme={theme}>

  <React.StrictMode>
      <App />
  </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
