import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Index from './pages/Home';
import Tvshow from './pages/Tvshow';
import Tvepisode from './pages/Tvepisode';
import TrendingPage from './pages/TrendingPage';
import Popular from './pages/Popular';
import Nowshowing from './pages/test';
import Mylists from './pages/Mylists';
import SingleMovie from './pages/SingleMovie';
import Register from './user/Register';
import Login from './user/Login';
import ProfilePage from './user/state/ProfilePage';
import ProtectedRoutes from './utils/ProtectedRotes';

const routes = createBrowserRouter( [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Index />
      },
      {
        path: "/tvshow",
        element: <Tvshow />
      },
      {
        path: "/tvepisode",
        element: <Tvepisode />
      },
      {
        path: "/trending",
        element: <TrendingPage />
      },
      {
        path: "/popular",
        element: <Popular />
      },
      {
        path: "/nowshowing",
        element: <Nowshowing />
      },
      {
        path: "/mylists",
        element: <Mylists />
      },
      {
        path: "/movies/:id",
        element: <SingleMovie />
      },
      {
        path : "/register",
        element : <Register/>
        // can i have different set of routes here again ? 
      },
      {
        path : "/login",
        element : <Login/>
        // can i have different set of routes here again ? 
      },
      {
        path : "/profile",
        element : <ProtectedRoutes element={<ProfilePage/>} />
        // can i have different set of routes here again ? 
      },
    ]
  } ,

  
  


])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} /> 
  </React.StrictMode>
);

