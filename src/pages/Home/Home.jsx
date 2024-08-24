import React from 'react';
import { Stack } from '@mui/material';
import landing from '../../assets/landing.svg';
const Home = () => {
  return (
    <Stack display="flex" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
      <img src={landing} style={{ width: '60%' }}></img>
    </Stack>
  );
};
export default Home;
