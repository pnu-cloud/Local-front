import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Box } from '@mui/material';
import { feature } from 'topojson-client';
import { useNavigate } from 'react-router-dom'; // React Router의 useNavigate 훅을 가져옵니다.
import KoreaMapTopo from './KoreaMapTopo.json'; // 준비한 TopoJSON 파일 경로

const KoreaMap = () => {
  const svgRef = useRef(null);
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 600;

    // 투영법 설정 (Mercator projection)
    const projection = d3
      .geoMercator()
      .fitSize([width, height], feature(KoreaMapTopo, KoreaMapTopo.objects['KoreaMapTopo']));
    const pathGenerator = d3.geoPath().projection(projection);

    const colorMapping = {
      'Gangwon-do': '#42B5E7', // 강원도에 대한 색상
      'Gyeonggi-do': '#FFB082',
      'Gyeongsangnam-do': '#FFAFAF',
      'Gyeongsangbuk-do': '#C591C2',
      Gwangju: '#F5D163',
      Daegu: '#C591C2',
      Daejeon: '#7AC564',
      Busan: '#FFAFAF',
      Seoul: '#FFB082',
      'Sejong-si': '#7AC564',
      Ulsan: '#FFAFAF',
      Incheon: '#FFB082',
      'Jellanam-do': '#F5D163',
      'Jeollabuk-do': '#F5D163',
      'Jeju-do': '#F8AB5A',
      'Chungcheongbuk-do': '#7AC564',
      'Chungcheongnam-do': '#7AC564',
    };

    const Naming = {
      'Gangwon-do': '강원',
      'Gyeonggi-do': '경기',
      'Gyeongsangnam-do': '경남',
      'Gyeongsangbuk-do': '경북',
      Gwangju: '',
      Daegu: '',
      Daejeon: '',
      Busan: '',
      Seoul: '',
      'Sejong-si': '',
      Ulsan: '',
      Incheon: '',
      'Jellanam-do': '전남',
      'Jeollabuk-do': '전북',
      'Jeju-do': '제주',
      'Chungcheongbuk-do': '충북',
      'Chungcheongnam-do': '충남',
    };

    // 지도 그리기
    svg
      .selectAll('path')
      .data(feature(KoreaMapTopo, KoreaMapTopo.objects['KoreaMapTopo']).features)
      .enter()
      .append('path')
      .attr('d', pathGenerator)
      .attr('fill', (d) => {
        const engName = d.properties?.CTP_ENG_NM;
        return colorMapping[engName] || '#DFDFDF';
      })
      .attr('stroke', '#fff') // 경계선을 하얀색으로 설정
      .attr('stroke-width', 0.5)
      .style('cursor', 'pointer')
      .on('mouseover', function () {
        d3.select(this).attr('fill', '#DFDFDF');
      })
      .on('mouseout', function () {
        const data = d3.select(this).datum();
        const engName = data.properties?.CTP_ENG_NM;
        d3.select(this).attr('fill', colorMapping[engName] || '#DFDFDF');
      })
      .on('click', function (event, d) {
        const engName = d.properties?.CTP_ENG_NM;
        navigate(`/matching-step2/${Naming[engName]}`); // 클릭 시 해당 경로로 이동
      });

    svg
      .selectAll('text')
      .data(feature(KoreaMapTopo, KoreaMapTopo.objects['KoreaMapTopo']).features)
      .enter()
      .append('text')
      .attr('x', (d) => pathGenerator.centroid(d)[0]) // 중심의 x좌표
      .attr('y', (d) => pathGenerator.centroid(d)[1]) // 중심의 y좌표
      .attr('text-anchor', 'middle') // 텍스트 가운데 정렬
      .attr('dy', '.35em') // 텍스트 세로 위치 보정
      .attr('font-size', '18px') // 폰트 크기
      .attr('font-weight', '700')
      .attr('fill', 'white') // 텍스트 색상
      .text((d) => {
        const engName = d.properties?.CTP_ENG_NM;
        return Naming[engName];
      }); // 도시 이름을 텍스트로 표시
  }, [navigate]); // useEffect의 종속성 배열에 navigate를 추가

  return (
    <Box className="w-50%">
      <svg ref={svgRef} width="800" height="600"></svg>
    </Box>
  );
};

export default KoreaMap;
