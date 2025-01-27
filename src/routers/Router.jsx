import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Main from '../pages/Main/Main';
import MakeReadwith from '../pages/makeReadwith/makeReadwith';
import Test from '../pages/Test';
import Info from '../pages/Info/Info';
import Login from '../pages/login/Login';
import Onboarding from '../pages/onboarding/Onboarding';
import Signup from '../pages/signup/Signup';
import Category from '../pages/category/Category';
import Profile from '../pages/profile/Profile';
import Home from '../pages/home/Home';
import Search from '../pages/search/search';
import Bookmark from '../pages/bookmark/Bookmark';
import Record from '../pages/record/Record';
import ReadingLog from '../pages/readingLog/ReadingLog';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/test',
      element: <Test />,
    },
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/makeReadwith',
      element: <MakeReadwith />,
    },
    {
      path: '/info',
      element: <Info />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/onboarding',
      element: <Onboarding />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/category',
      element: <Category />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/search',
      element: <Search />,
    },
    {
      path: '/bookmark',
      element: <Bookmark />,
    },
    {
      path: '/record',
      element: <Record />,
    },
    {
      path: '/readinglog',
      element: <ReadingLog nickname="TestUser" />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
