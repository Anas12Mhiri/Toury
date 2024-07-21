import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main.jsx';

import Assitance10 from './pages/Assitance10.jsx';
import Assitance11 from './pages/Assitance11.jsx';
import Assitance12 from './pages/Assitance12.jsx';
import Chat from './pages/Chat.jsx';
import Chat2 from './pages/Chat2.jsx';
import Chat3 from './pages/Chat3.jsx';
import Chat4 from './pages/Chat4.jsx';
import Chat5 from './pages/Chat5.jsx';
import Chat6 from './pages/Chat6.jsx';
import Desktop1 from './pages/Desktop1.jsx';
import Desktop2 from './pages/Desktop2.jsx';
import Desktop3 from './pages/Desktop3.jsx';
import Desktop4 from './pages/Desktop4.jsx';
import Desktop5 from './pages/Desktop5.jsx';
import Google from './pages/Google.jsx';
import Login from './pages/Login.jsx';
import MotDePasse10 from './pages/MotDePasse10.jsx';
import MotDePasse11 from './pages/MotDePasse11.jsx';
import MotDePasse12 from './pages/MotDePasse12.jsx';
import Page from './pages/Page.jsx';
import Page1 from './pages/Page1.jsx';
import Page2 from './pages/Page2.jsx';
import Page3 from './pages/Page3.jsx';
import Page4 from './pages/Page4.jsx';
import Screen1 from './pages/Screen1.jsx';
import Screen10 from './pages/Screen10.jsx';
import Screen11 from './pages/Screen11.jsx';
import Screen12 from './pages/Screen12.jsx';
import Screen13 from './pages/Screen13.jsx';
import Screen14 from './pages/Screen14.jsx';
import Screen15 from './pages/Screen15.jsx';
import Screen16 from './pages/Screen16.jsx';
import Screen17 from './pages/Screen17.jsx';
import Screen18 from './pages/Screen18.jsx';
import Screen19 from './pages/Screen19.jsx';
import Screen2 from './pages/Screen2.jsx';
import Screen20 from './pages/Screen20.jsx';
import Screen21 from './pages/Screen21.jsx';
import Screen22 from './pages/Screen22.jsx';
import Screen3 from './pages/Screen3.jsx';
import Screen4 from './pages/Screen4.jsx';
import Screen5 from './pages/Screen5.jsx';
import Screen6 from './pages/Screen6.jsx';
import Screen7 from './pages/Screen7.jsx';
import Screen8 from './pages/Screen8.jsx';
import Screen9 from './pages/Screen9.jsx';
import SignUp1 from './pages/SignUp1.jsx';
import SignUp2 from './pages/SignUp2.jsx';
import Social from './pages/Social.jsx';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/Assitance10', element: <Assitance10 /> },
{ path: '/Assitance11', element: <Assitance11 /> },
{ path: '/Assitance12', element: <Assitance12 /> },
{ path: '/Chat', element: <Chat /> },
{ path: '/Chat2', element: <Chat2 /> },
{ path: '/Chat3', element: <Chat3 /> },
{ path: '/Chat4', element: <Chat4 /> },
{ path: '/Chat5', element: <Chat5 /> },
{ path: '/Chat6', element: <Chat6 /> },
{ path: '/Desktop1', element: <Desktop1 /> },
{ path: '/Desktop2', element: <Desktop2 /> },
{ path: '/Desktop3', element: <Desktop3 /> },
{ path: '/Desktop4', element: <Desktop4 /> },
{ path: '/Desktop5', element: <Desktop5 /> },
{ path: '/Google', element: <Google /> },
{ path: '/Login', element: <Login /> },
{ path: '/MotDePasse10', element: <MotDePasse10 /> },
{ path: '/MotDePasse11', element: <MotDePasse11 /> },
{ path: '/MotDePasse12', element: <MotDePasse12 /> },
{ path: '/Page', element: <Page /> },
{ path: '/Page1', element: <Page1 /> },
{ path: '/Page2', element: <Page2 /> },
{ path: '/Page3', element: <Page3 /> },
{ path: '/Page4', element: <Page4 /> },
{ path: '/Screen1', element: <Screen1 /> },
{ path: '/Screen10', element: <Screen10 /> },
{ path: '/Screen11', element: <Screen11 /> },
{ path: '/Screen12', element: <Screen12 /> },
{ path: '/Screen13', element: <Screen13 /> },
{ path: '/Screen14', element: <Screen14 /> },
{ path: '/Screen15', element: <Screen15 /> },
{ path: '/Screen16', element: <Screen16 /> },
{ path: '/Screen17', element: <Screen17 /> },
{ path: '/Screen18', element: <Screen18 /> },
{ path: '/Screen19', element: <Screen19 /> },
{ path: '/Screen2', element: <Screen2 /> },
{ path: '/Screen20', element: <Screen20 /> },
{ path: '/Screen21', element: <Screen21 /> },
{ path: '/Screen22', element: <Screen22 /> },
{ path: '/Screen3', element: <Screen3 /> },
{ path: '/Screen4', element: <Screen4 /> },
{ path: '/Screen5', element: <Screen5 /> },
{ path: '/Screen6', element: <Screen6 /> },
{ path: '/Screen7', element: <Screen7 /> },
{ path: '/Screen8', element: <Screen8 /> },
{ path: '/Screen9', element: <Screen9 /> },
{ path: '/SignUp1', element: <SignUp1 /> },
{ path: '/SignUp2', element: <SignUp2 /> },
{ path: '/Social', element: <Social /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}