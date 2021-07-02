import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

