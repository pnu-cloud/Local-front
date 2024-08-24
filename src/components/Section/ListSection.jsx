import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, Divider, Typography, Pagination, Stack, Box } from '@mui/material';
import { LOCAL_COLOR } from '../../constants/localTheme';
import categoryIcon from '../../assets/category.svg';

const ListSection = ({ postInfo }) => {
  return (
    <Box sx={{ mx: 'auto' }}>
      <List sx={{ width: '60%' }}>
        <ListItem
          sx={{
            borderRadius: '4px',
            backgroundColor: LOCAL_COLOR.backWhite,
            display: 'flex',
            alignContent: 'center',
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
        {postInfo.map((post) => (
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
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" />
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
