import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import GangwonMapTopo from './GangwonMapTopo.json'; // 준비한 TopoJSON 파일 경로

const GangwonMap = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 600;

    // 투영법 설정 (Mercator projection)
    const projection = d3
      .geoMercator()
      .fitSize([width, height], feature(GangwonMapTopo, GangwonMapTopo.objects['GangwonMapTopo']));
    const pathGenerator = d3.geoPath().projection(projection);

    // 색상 스케일 설정
    const colorMapping = {
      'Chuncheon-si': '#0392FF', // 춘천시
      'Wonju-si': '#1B9EFF', // 원주시
      'Gangneung-si': '#1B9EFF', // 강릉시
      'Donghae-si': '#4EB7FF', // 동해시
      'Taebaek-si': '#66C3FF', // 태백시
      'Sokcho-si': '#7FCFFF', // 속초시
      'Samcheok-si': '#97DBFF', // 삼척시
      'Hongcheon-gun': '#03E2D7', // 홍천군
      'Hoengseong-gun': '#1AE5DB', // 횡성군
      'Yeongwol-gun': '#30E8DF', // 영월군
      'Pyeongchang-gun': '#45EAE2', // 평창군
      'Jeongseon-gun': '#5BEDE5', // 정선군
      'Cheorwon-gun': '#71EFE9', // 철원군
      'Hwacheon-gun': '#89F2ED', // 화천군
      'Yanggu-gun': '#9EF5F0', // 양구군
      'Inje-gun': '#B5F7F4', // 인제군
      'Goseong-gun': '#CCFAF7', // 고성군
      'Yangyang-gun': '#E2FDFB', // 양양군
    };
    const features = feature(GangwonMapTopo, GangwonMapTopo.objects['GangwonMapTopo']).features;

    // 지도 그리기
    svg
      .style('cursor', 'pointer')
      .selectAll('path')
      .data(features)
      .enter()
      .append('path')
      .attr('d', pathGenerator)
      .attr('fill', (d) => {
        // 방어적 코딩: properties 객체가 존재하는지 확인
        const engName = d.properties?.SIG_ENG_NM;
        console.log(d.properties.SIG_ENG_NM);
        console.log(engName);
        return colorMapping[engName] || '#DFDFDF';
      })
      .attr('stroke', '#fff') // 경계선을 하얀색으로 설정
      .attr('stroke-width', 0.5)
      .on('mouseover', function () {
        d3.select(this).attr('fill', '#DFDFDF');
      })
      .on('mouseout', function () {
        // 'this'는 현재 이벤트가 발생한 DOM 요소를 가리킴
        const data = d3.select(this).datum();

        // data.properties를 통해 속성에 접근
        const engName = data.properties?.SIG_ENG_NM;

        // engName과 함께 색상 매핑
        d3.select(this).attr('fill', colorMapping[engName] || '#DFDFDF');
      });
    // 도시 이름을 위한 사각형 배경과 텍스트 추가
    features.forEach((d) => {
      const [x, y] = pathGenerator.centroid(d); // 중심 좌표 계산

      // 사각형 배경 추가
      svg
        .append('rect')
        .attr('x', x - 32) // 중심 좌표에서 64px의 절반을 빼서 중앙 정렬
        .attr('y', y - 20.5) // 중심 좌표에서 41px의 절반을 빼서 중앙 정렬
        .attr('width', 64)
        .attr('height', 41)
        .attr('rx', 10) // 모서리 반경 (border-radius 효과)
        .attr('fill', 'rgba(255, 255, 255, 0.4)') // 반투명 흰색 배경
        .style('backdrop-filter', 'blur(15px)') // 블러 효과 (브라우저 지원 필요)
        .style('pointer-events', 'none'); // 마우스 이벤트 무시
      // 텍스트 추가
      svg
        .append('text')
        .attr('x', x) // 중심의 x좌표
        .attr('y', y) // 중심의 y좌표
        .attr('text-anchor', 'middle') // 텍스트 가운데 정렬
        .attr('dy', '.35em') // 텍스트 세로 위치 보정
        .attr('font-size', '18px') // 폰트 크기
        .attr('font-weight', '700')
        .attr('fill', 'black') // 텍스트 색상
        .style('pointer-events', 'none') // 마우스 이벤트 무시
        .text(d.properties?.SIG_KOR_NM?.slice(0, 2)); // 도시 이름의 앞 두 글자만 텍스트로 표시
    });
  }, []);

  return (
    <Box className="w-30%">
      <svg ref={svgRef} width="800" height="600"></svg>
    </Box>
  );
};

export default GangwonMap;
