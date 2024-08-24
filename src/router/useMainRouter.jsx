import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout';
import FitContainer from '../components/Layout/Container/FitContainer';
import Home from '../pages/Home/Home';
import Infra from '../pages/Infra/Infra';
import Matching from '../pages/Matching/Matching';
import Matching2 from '../pages/Matching/Matching2';
import Matching3 from '../pages/Matching/Matching3';
import Apply from '../pages/Apply/Apply';
import Review from '../pages/Review/Review';
import ApplyModal from '../components/Modal/ApplyModal';

import ListSection from '../components/Section/ListSection';

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
            { path: 'matching-step2/*', element: <Matching2 /> },
            {
              path: '/matching-step3/:regionSearch',
              element: <Matching3 />,
            },
            { path: 'review', element: <Review /> },
            { path: 'list', element: <ListSection /> },
            { path: 'apply', element: <Apply /> },
            { path: 'modal', element: <ApplyModal /> },
          ],
        },
      ],
    },
  ]);
};

export default useMainRouter;
