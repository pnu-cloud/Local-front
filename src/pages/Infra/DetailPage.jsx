import React, { useEffect, useState } from 'react';
import GangwonMap from '../../components/Maps/GangwonMap';
import food from '../../assets/infra/food.png';
import burger from '../../assets/infra/burger.png';
import burger_no from '../../assets/infra/burger_no.png';
import bus from '../../assets/infra/bus.png';
import cart from '../../assets/infra/cart.png';
import hobby from '../../assets/infra/hobby.png';
import hospital from '../../assets/infra/hospital.png';
import medical from '../../assets/infra/medical.png';
import movie from '../../assets/infra/movie.png';
import movie_no from '../../assets/infra/movie_no.png';
import starbucks from '../../assets/infra/starbucks.png';
import starbucks_no from '../../assets/infra/starbucks_no.png';
import subway from '../../assets/infra/subway.png';
import swim from '../../assets/infra/swim.png';
import transport from '../../assets/infra/transport.png';
import yogurt from '../../assets/infra/yogurt.png';
import yogurt_no from '../../assets/infra/yogurt_no.png';
import noSelectedRegion from '../../assets/noSelectedRegion.svg';

const DetailPage = ({ region }) => {
  const [regionSearch, setRegionSearch] = useState('ALL');

  useEffect(() => {
    console.log('ㅁㅇㅁ : ', regionSearch, region === '삼척시');
  }, [regionSearch]);

  const regions = ['강원', '경기', '경남', '경북', '전남', '전북', '제주', '충북', '충남'];
  const nameFiltering = (value) => {
    if (regions.includes(value)) {
      return `${value} 에 대한 인프라 정보는 준비중입니다.`;
    } else {
      return '[ 강원, 경기, 경남, 경북, 전남, 전북, 제주, 충북, 충남 ] 지역 중 하나를 선택해주세요.';
    }
  };

  return (
    <div className=" bg-backWhite flex justify-center items-center rounded-lg h-[700px] w-full">
      {region === '강원' ? (
        <div className="flex w-full ">
          <div className="w-1/2">
            <GangwonMap regionSearch={regionSearch} setRegionSearch={setRegionSearch}></GangwonMap>
          </div>
          <div className="w-1/2 px-32 py-16 flex flex-col gap-12">
            <p className="text-darkGray font-normal">
              * 원하시는 지역을 클릭하면 <br /> 해당 지역에서의 시설 현황을 확인하실 수 있습니다.
            </p>
            <div className="flex gap-6">
              <img src={food} alt="food" />
              <div className="flex gap-4 h-16">
                <img src={regionSearch === '삼척시' ? starbucks_no : starbucks} alt="food" />
                <img src={regionSearch === '삼척시' ? yogurt_no : yogurt} alt="food" />
                <img src={regionSearch === '삼척시' ? burger_no : burger} alt="food" />
              </div>
            </div>
            <div className="flex gap-6">
              <img src={hobby} alt="food" />
              <div className="flex gap-4 h-12">
                <img src={regionSearch === '삼척시' ? movie_no : movie} alt="food" />
                <img src={swim} alt="food" width="64" />
                <img src={cart} alt="food" />
              </div>
            </div>
            <div className="flex gap-6">
              <img src={medical} alt="food" />
              <div className="flex gap-4 h-12">
                <img src={hospital} alt="food" />
              </div>
            </div>
            <div className="flex gap-6">
              <img src={transport} alt="food" />
              <div className="flex gap-4 h-12">
                <img src={subway} alt="food" />
                <img src={bus} alt="food" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {region === '' || region === ' -- ' ? (
            <img src={noSelectedRegion} alt="noSelectedRegion" />
          ) : (
            nameFiltering(region)
          )}
        </div>
      )}
    </div>
  );
};

DetailPage.propTypes = {
  region: String, // 'region' prop이 필수 문자열 타입으로 정의됨
};

export default DetailPage;
