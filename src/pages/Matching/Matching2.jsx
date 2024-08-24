import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import BannerSection from '../../components/Section/BannerSection';
import ListSection from '../../components/Section/ListSection';
//import { posts } from '../../constants/boardInfo';
import GangwonMap from '../../components/Maps/GangwonMap';
import localDormitoryAPI from '../../APIs/localDormitoryAPI';
import { useParams } from 'react-router-dom';

const Matching2 = () => {
  const [regionSearch, setRegionSearch] = useState('ALL');

  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { local } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await localDormitoryAPI(local); // 비동기 함수의 결과를 동기적으로 기다림
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };
    fetchData();
  }, [local]);
  console.log(jsonData);
  if (loading) {
    return <div>loading</div>; // 로딩 중일 때 표시할 컴포넌트
  }
  if (!loading && jsonData) {
    return (
      <div>
        <BannerSection step="2" question="Q2. 지역이 선택되었어요! 원하는 숙소의 위치가 있나요?" />
        <Box className="flex pt-15" sx={{ justifyContent: 'space-between' }}>
          <GangwonMap regionSearch={regionSearch} setRegionSearch={setRegionSearch}></GangwonMap>
          <ListSection postInfo={jsonData} regionSearch={regionSearch} />
        </Box>
      </div>
    );
  }
};
export default Matching2;
