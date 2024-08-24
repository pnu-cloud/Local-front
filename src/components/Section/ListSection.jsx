import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, Divider, Typography, Pagination, Stack, Box, Button } from '@mui/material';
import { LOCAL_COLOR } from '../../constants/localTheme';
import categoryIcon from '../../assets/category.svg';
import SearchSection from './SearchSection';
import { useNavigate } from 'react-router-dom';

const regionNameK2E = {
  춘천: 'Chuncheon-si',
  원주: 'Wonju-si',
  강릉: 'Gangneung-si',
  동해: 'Donghae-si',
  태백: 'Taebaek-si',
  속초: 'Sokcho-si',
  삼척: 'Samcheok-si',
  홍천: 'Hongcheon-gun',
  횡성: 'Hoengseong-gun',
  영월: 'Yeongwol-gun',
  평창: 'Pyeongchang-gun',
  정선: 'Jeongseon-gun',
  철원: 'Cheorwon-gun',
  화천: 'Hwacheon-gun',
  양구: 'Yanggu-gun',
  인제: 'Inje-gun',
  고성: 'Goseong-gun',
  양양: 'Yangyang-gun',
};
const ListSection = ({ postInfo, regionSearch }) => {
  console.log('first' + regionSearch);
  console.log(postInfo);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  // Filter posts based on regionSearch

  const filteredPosts = postInfo.filter((post) => {
    if (regionSearch === 'ALL') return true; // Show all posts if regionSearch is 'ALL'
    console.log('regionSearch : ' + regionSearch);
    console.log('post : ' + post.local);
    return post.local.substring(0, 2) === regionSearch.substring(0, 2); // Filter posts with the same first two characters
  });

  const paginatedPosts = filteredPosts.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const pageCount = Math.ceil(filteredPosts.length / itemsPerPage);
  const navigate = useNavigate();
  const handleListItemClick = (cityEngName) => {
    navigate(`/matching-step3/${cityEngName}`);
  };
  return (
    <Box sx={{ width: '70%', display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Stack direction="row" className="items-center justify-between">
        <Typography className="mr-5 text-14px_medium" sx={{ fontWeight: 700 }}>
          원하는 생활 지역
        </Typography>
        <SearchSection />
        <Button
          className="ml-5 font-bold text-18px_medium"
          sx={{ backgroundColor: LOCAL_COLOR.yellow, color: 'black', fontWeight: 700, boxShadow: 'none' }}
          variant="contained"
        >
          검색
        </Button>
      </Stack>
      <List>
        <ListItem
          sx={{
            borderRadius: '4px',
            backgroundColor: LOCAL_COLOR.backWhite,
            display: 'flex',
          }}
        >
          <ListItemText
            sx={{ width: '20%' }}
            primary={
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                <img src={categoryIcon} alt="Category Icon" style={{ width: '16px', height: '16px' }} />
                카테고리
              </Typography>
            }
          />
          <ListItemText
            sx={{ width: '20%' }}
            primary={<Typography sx={{ fontWeight: 700, fontSize: '14px' }}>상세 지역</Typography>}
          />
          <ListItemText
            sx={{ width: '60%' }}
            primary={<Typography sx={{ fontWeight: 700, fontSize: '14px' }}>상세 장소</Typography>}
          />
        </ListItem>
        {paginatedPosts.map((post) => (
          <React.Fragment key={post.id}>
            <ListItem
              button
              onClick={() => {
                const engName = regionNameK2E[post.local];
                handleListItemClick(post.local);
              }}
              sx={{
                '&:hover': {
                  backgroundColor: '#F9E08880', // Change this to the color you want on hover
                },
              }}
            >
              <ListItemText
                sx={{ width: '20%' }}
                primary={
                  <Typography sx={{ fontWeight: 700, fontSize: '14px', color: '#42B5E7' }}>{post.category}</Typography>
                }
              />
              <ListItemText
                sx={{ width: '20%' }}
                primary={<Typography sx={{ fontWeight: 700, fontSize: '14px' }}>{post.local}</Typography>}
              />
              <ListItemText
                sx={{ width: '60%' }}
                primary={<Typography sx={{ fontWeight: 700, fontSize: '14px' }}>{post.name}</Typography>}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <Stack spacing={2} sx={{ alignItems: 'center' }}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          sx={{
            '& .MuiPaginationItem-root': {
              borderColor: '#C4CDD5',
            },
            '& .MuiPaginationItem-previousNext': {
              backgroundColor: '#B0BEC5',
            },
            '& .MuiPaginationItem-previousNext:hover': {
              backgroundColor: '#90A4AE',
            },
            '& .MuiPaginationItem-page': {
              color: 'black',
              fontSize: '14px',
              fontWeight: 700,
            },
            '& .MuiPaginationItem-page.Mui-selected': {
              border: '1px solid #4200FF',
              backgroundColor: '#FFFFFF',
              color: '#4200FF',
            },
          }}
        />
      </Stack>
    </Box>
  );
};

ListSection.propTypes = {
  postInfo: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      local: PropTypes.string.isRequired,
    }),
  ),
};

export default ListSection;
