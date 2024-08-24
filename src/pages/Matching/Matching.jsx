import React from 'react';
import { Box } from '@mui/material';
import BannerSection from '../../components/Section/BannerSection';
import KoreaMap from '../../components/Maps/KoreaMap';
import travelImg from '../../assets/travel.svg';

const Matching = () => {
  return (
    <>
      <BannerSection step="1" question="Q1. 내가 여행하고 싶은 지역은 어디인가요?" />
      <Box className="flex pt-15">
        <KoreaMap></KoreaMap>
        <img src={travelImg} style={{ width: '500px' }}></img>
      </Box>
    </>
  );
};
export default Matching;
