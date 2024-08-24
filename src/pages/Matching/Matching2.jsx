import React from 'react';
import BannerSection from '../../components/Section/BannerSection';
import { useParams } from 'react-router-dom';

const Matching2 = () => {
  const { region } = useParams();
  return (
    <div>
      <BannerSection />
      <h1>Matching2 페이지</h1>
      <p>현재 선택된 지역: {region}</p>
      {/* 여기에 지역별로 다른 내용을 추가할 수 있습니다 */}
    </div>
  );
};
export default Matching2;
