import React from 'react';
import { Box } from '@mui/material';
import BannerSection from '../../components/Section/BannerSection';
import ListSection from '../../components/Section/ListSection';
import { posts } from '../../constants/boardInfo';
// import { useParams } from 'react-router-dom';
import GangwonMap from '../../components/Maps/GangwonMap';

const Matching2 = () => {
  // const { region } = useParams();
  return (
    <>
      <BannerSection step="2" question="Q2. 지역이 선택되었어요! 원하는 숙소의 위치가 있나요?" />
      <Box className="flex pt-15" sx={{ justifyContent: 'space-between' }}>
        <GangwonMap></GangwonMap>
        <ListSection postInfo={posts} />
      </Box>
    </>
  );
};
export default Matching2;
