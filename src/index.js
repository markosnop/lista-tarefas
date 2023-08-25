import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import axios from 'axios'

//1- configurando router

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sobre from './Sobre';
import Contato from './Contato';
import Contents from './Contents';

const nome = "Wisner";
const ano = 2023;




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Contents nome={nome} ano={ano}/>
      },
      {
        path: '/sobre',
        element: <Sobre />
      },
      {
        path: '/contato',
        element: <Contato />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

