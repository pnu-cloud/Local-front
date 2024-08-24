import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, Divider, Typography, Pagination, Stack, Box, Button } from '@mui/material';
import { LOCAL_COLOR } from '../../constants/localTheme';
import categoryIcon from '../../assets/category.svg';
import SearchSection from './SearchSection';

const ListSection = ({ postInfo }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  const paginatedPosts = postInfo.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const pageCount = Math.ceil(postInfo.length / itemsPerPage);

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
            <ListItem>
              <ListItemText
                sx={{ width: '20%' }}
                primary={
                  <Typography sx={{ fontWeight: 700, fontSize: '14px', color: '#42B5E7' }}>{post.category}</Typography>
                }
              />
              <ListItemText
                sx={{ width: '20%' }}
                primary={<Typography sx={{ fontWeight: 700, fontSize: '14px' }}>{post.region}</Typography>}
              />
              <ListItemText
                sx={{ width: '60%' }}
                primary={<Typography sx={{ fontWeight: 700, fontSize: '14px' }}>{post.place}</Typography>}
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
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      region: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
    }),
  ),
};

export default ListSection;
