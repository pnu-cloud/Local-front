import React from 'react';
import { useRoutes } from 'react-router-dom';
import Header from '../components/Header/Header';

const useMainRouter = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          element: <FullContainer />,
        },
      ],
    },
    { path: '/header', element: <Header /> },
  ]);
};
