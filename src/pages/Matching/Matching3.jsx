import React from 'react';
import BannerSection from '../../components/Section/BannerSection';
import RecruitSection from '../../components/Section/RecruitSection';

const Matching3 = () => {
  return (
    <>
      <BannerSection
        step="3"
        question='Q3. 거의 다 왔어요! 숙소 근처의 기업 및 봉사활동 리스트를 선택하고 “지원하기" 버튼을 눌러주세요'
      />
      <RecruitSection />
    </>
  );
};
export default Matching3;
