import React from 'react';
import BannerSection from '../../components/Section/BannerSection';
import KoreaMap from '../../components/Maps/KoreaMap';
import GangwonMap from '../../components/Maps/GangwonMap';
const Matching = () => {
  return (
    <>
      <BannerSection step="1" question="Q1. 내가 여행하고 싶은 지역은 어디인가요?" />;
      <GangwonMap></GangwonMap>
      <KoreaMap></KoreaMap>
    </>
  );
};
export default Matching;
