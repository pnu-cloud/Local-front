import React, { useState, useEffect } from 'react';
//import GangwonMap from '../../components/Maps/GangwonMap';
import KoreaReviewMap from '../../components/Maps/KoreaReviewMap';
import { Stack, Typography, Box } from '@mui/material';
import redMark from '../../assets/redMark.svg';
import ReviewSection from '../../components/Section/ReviewSection';
import AllReviewAPI from '../../APIs/AllReviewAPI';
import LocalReviewAPI from '../../APIs/LocalReviewAPI';

const Review = () => {
  const [localSearch, setLocalSearch] = useState('ALL');
  const [reviews, setReviews] = useState([]); // 리뷰 데이터를 저장하는 상태
  const [loading, setLoading] = useState(true);
  const Naming = {
    'Gangwon-do': '강원',
    'Gyeonggi-do': '경기',
    'Gyeongsangnam-do': '경남',
    'Gyeongsangbuk-do': '경북',
    Gwangju: '광주',
    Daegu: '대구',
    Daejeon: '대전',
    Busan: '부산',
    Seoul: '서울',
    'Sejong-si': '세종',
    Ulsan: '울산',
    Incheon: '인천',
    'Jellanam-do': '전남',
    'Jeollabuk-do': '전북',
    'Jeju-do': '제주',
    'Chungcheongbuk-do': '충북',
    'Chungcheongnam-do': '충남',
  };
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        let data;
        if (localSearch === 'ALL') {
          data = await AllReviewAPI(); // 전체 리뷰를 가져오는 API 호출
        } else {
          data = await LocalReviewAPI(localSearch); // 특정 지역의 리뷰를 가져오는 API 호출
        }
        setReviews(data); // 가져온 리뷰 데이터를 상태에 저장
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };
    fetchReviews();
  }, [localSearch]); // localSearch가 변경될 때마다 API 호출

  if (loading) {
    return <div>loading</div>; // 로딩 중일 때 표시할 컴포넌트
  }
  if (!loading && reviews) {
    return (
      <Stack direction="row">
        <Box className="flex pt-13" sx={{ justifyContent: 'space-between' }}>
          <Stack
            direction="column" // 수직 방향으로 정렬
            justifyContent="flex-end"
            alignItems="flex-start" // 수평 중앙 정렬
            spacing={2} // 아이템 사이의 간격
          >
            <Typography sx={{ paddingLeft: 20, color: '#8A8A8A', fontSize: 18, fontWeight: 500 }}>
              지도를 클릭해서 지역을 선택해주세요! <br />
              해당 지역에 대한 다른 사람들의 후기를 읽을 수 있습니다
            </Typography>
            <Stack direction="row" sx={{ paddingLeft: 20 }}>
              <img src={redMark} />
              <Typography className="text-14px_medium" sx={{ fontWeight: '700', padding: 1 }}>
                선택한 지역: {Naming[localSearch]}
              </Typography>
            </Stack>
            <KoreaReviewMap localSearch={localSearch} setLocalSearch={setLocalSearch}></KoreaReviewMap>
          </Stack>
          {/* // */}
        </Box>
        <Box className="flex pt-13" sx={{ justifyContent: 'space-between' }}>
          <ReviewSection reviews={reviews}> </ReviewSection>
        </Box>
      </Stack>
    );
  }
};

export default Review;
