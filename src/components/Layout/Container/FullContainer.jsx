import React from 'react';
import { Outlet } from 'react-router-dom';

const FullContainer = () => {
  return (
    <div className="flex min-h-screen w-full justify-center pt-10 sm:pt-header">
      <Outlet />
    </div>
  );
};

export default FullContainer;
