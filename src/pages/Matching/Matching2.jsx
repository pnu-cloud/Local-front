import React from 'react';
import BannerSection from '../../components/Section/BannerSection';
import ListSection from '../../components/Section/ListSection';
import { posts } from '../../constants/boardInfo';
import { useParams } from 'react-router-dom';

const Matching2 = () => {
  const { region } = useParams();
  return (
    <div>
      <BannerSection step="2" question="Q2. 지역이 선택되었어요! 원하는 숙소의 위치가 있나요?" />
      <ListSection postInfo={posts} />
      <h1>Matching2 페이지</h1>
      <p>현재 선택된 지역: {region}</p>
      {/* 여기에 지역별로 다른 내용을 추가할 수 있습니다 */}
    </div>
  );
};
export default Matching2;
