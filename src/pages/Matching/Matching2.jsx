import React from 'react';
import BannerSection from '../../components/Section/BannerSection';
import ListSection from '../../components/Section/ListSection';
import { posts } from '../../constants/boardInfo';

const Matching2 = () => {
  return (
    <div>
      <BannerSection step="2" question="Q2. 지역이 선택되었어요! 원하는 숙소의 위치가 있나요?" />
      <ListSection postInfo={posts} />
    </div>
  );
};
export default Matching2;
