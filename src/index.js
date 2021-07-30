import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { store } from "./store/store";
import {AppRouter} from "./router/AppRouter";
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background: #352E6C;
    margin: 0 auto;
    padding: 0;
  }
`

ReactDOM.render(
  <Provider  store={store}>
    <GlobalStyle/>
    <AppRouter/>
  </Provider>,
  document.getElementById('root')
);
