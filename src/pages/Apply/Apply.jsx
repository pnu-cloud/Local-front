import React from 'react';
import BannerSection from '../../components/Section/BannerSection';
import RecruitSection from '../../components/Section/RecruitSection';
import { Box, Typography } from '@mui/material';
import { LOCAL_COLOR } from '../../constants/localTheme';
import redMark from '../../assets/redMark.svg';
import GangwonMap from '../../components/Maps/GangwonMap';

const Apply = () => {
  return (
    <>
      <BannerSection
        step="3"
        question='Q3. 거의 다 왔어요! 숙소 근처의 기업 및 봉사활동 리스트를 선택하고 "지원하기" 버튼을 눌러주세요.'
      />
      <Box className="flex pt-15">
        <Box className="flex flexDirection-column">
          <div
            className="flex items-center"
            style={{
              position: 'absolute',
              right: 0,
              height: '100%',
              justifyContent: 'flex-end',
            }}
          >
            <img src={redMark} />
            <Typography
              className="text-14px_medium"
              sx={{ fontWeight: '700', color: LOCAL_COLOR.darkGray, marginX: '20px' }}
            >
              선택한 지역:
            </Typography>
            <Typography className="text-14px_medium" sx={{ color: LOCAL_COLOR.darkGray, marginX: '10px' }}>
              추후 구현
            </Typography>
          </div>
          <GangwonMap />
        </Box>
        <RecruitSection />
      </Box>
    </>
  );
};
export default Apply;
