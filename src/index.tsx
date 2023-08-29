import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from "./router";
import reportWebVitals from './reportWebVitals';
import './virtual:windi.css'

// redux toolkit
import {Provider} from 'react-redux';
import store from './store/index';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
