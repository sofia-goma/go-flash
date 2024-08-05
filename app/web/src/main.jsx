import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Layout from './components/Layout.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import OpenStreetMap from './components/OpenStreetMap.jsx';
import About from './pages/About.jsx';
import 'leaflet/dist/leaflet.css';
import PrivateRoute from './routes/PrivateRoute.jsx';
import './css/index.css';
import AuthLayout from './routes/AuthLayout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
    ]
  },
  {
    path: '/app',
    element: <Layout />,
    children: [
      {
        path: '/app',
        element: <Home />
      },
      {
        path: '/app/about',
        element: <About />
      },
      {
        path: '/app/services',
        element: <Services />
      },
      {
        path: '/app/activities',
        element: <OpenStreetMap />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);