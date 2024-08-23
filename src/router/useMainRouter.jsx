import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout';
import FitContainer from '../components/Layout/Container/FitContainer';
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
          element: <FitContainer />,
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
