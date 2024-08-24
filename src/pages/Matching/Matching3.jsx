import React, { useState } from 'react';
import { Box } from '@mui/material';
import BannerSection from '../../components/Section/BannerSection';
import GangwonMap from '../../components/Maps/GangwonMap';
import ActivitySection from '../../components/Section/Info/ActivitySection';

import { useParams } from 'react-router-dom';
const regionNameE2K = {
  'Chuncheon-si': '춘천시',
  'Wonju-si': '원주시',
  'Gangneung-si': '강릉시',
  'Donghae-si': '동해시',
  'Taebaek-si': '태백시',
  'Sokcho-si': '속초시',
  'Samcheok-si': '삼척시',
  'Hongcheon-gun': '홍천군',
  'Hoengseong-gun': '횡성군',
  'Yeongwol-gun': '영월군',
  'Pyeongchang-gun': '평창군',
  'Jeongseon-gun': '정선군',
  'Cheorwon-gun': '철원군',
  'Hwacheon-gun': '화천군',
  'Yanggu-gun': '양구군',
  'Inje-gun': '인제군',
  'Goseong-gun': '고성군',
  'Yangyang-gun': '양양군',
};
const Matching3 = () => {
  const { regionSearch } = useParams();
  console.log(regionSearch);
  const decodedRegionSearch = decodeURIComponent(regionSearch); // Decode the URL-encoded parameter
  const regionName = regionNameE2K[decodedRegionSearch];
  console.log(regionName);
  const [regionSearch1, setRegionSearch] = useState(regionSearch);
  return (
    <>
      <BannerSection
        step="3"
        question='Q3. 거의 다 왔어요! 숙소 근처의 기업 및 봉사활동 리스트를 선택하고 “지원하기" 버튼을 눌러주세요'
      />
      <Box className="flex pt-15" sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ pointerEvents: 'none' }}>
          <GangwonMap regionSearch={regionSearch1} setRegionSearch={setRegionSearch} />
        </Box>
        <ActivitySection />
      </Box>
    </>
  );
};
export default Matching3;
