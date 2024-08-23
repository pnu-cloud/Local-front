import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout';
import FullContainer from '../components/Layout/Container/FullContainer';
import Home from '../pages/Home/Home';
import Infra from '../pages/Infra/Infra';
import Matching from '../pages/Matching/Matching';

const useMainRouter = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          element: <FullContainer />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            { path: 'infra', element: <Infra /> },
            { path: 'matching', element: <Matching /> },
          ],
        },
      ],
    },
  ]);
};

export default useMainRouter;
