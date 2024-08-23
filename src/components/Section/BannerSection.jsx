import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { LOCAL_COLOR } from '../../constants/localTheme';

const StyledGrid = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const BannerSection = ({ question }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <Box
      className="flex items-center justify-center"
      sx={{
        height: '142px',
        borderRadius: '20px',
        backgroundColor: LOCAL_COLOR.backWhite,
        padding: 1,
      }}
    >
      <Grid container sx={{ height: '75%', width: '95%' }}>
        <StyledGrid item xs={7}>
          <Typography sx={{ fontSize: '24px', fontWeight: '700', color: LOCAL_COLOR.green }}>
            로컬 라이프와 함께 국내 워킹홀리데이 일정을 잡아볼까요?{' '}
          </Typography>
        </StyledGrid>
        <StyledGrid item xs={5} justifyContent="flex-end">
          <Typography sx={{ fontSize: '24px', fontWeight: '700', color: LOCAL_COLOR.green }}>1/3</Typography>
        </StyledGrid>
        <StyledGrid item xs={7}>
          <Typography sx={{ fontSize: '18px' }}>{question}</Typography>
        </StyledGrid>
        <StyledGrid item xs={5} justifyContent="flex-end">
          <Button
            variant="contained"
            onClick={handleGoBack}
            sx={{
              color: LOCAL_COLOR.gray,
              backgroundColor: 'white',
              boxShadow: 'none',
              fontSize: '18px',
              fontWeight: '700',
              '&:hover': {
                backgroundColor: LOCAL_COLOR.darkGray,
                boxShadow: 'none',
              },
            }}
          >
            이전으로
          </Button>
        </StyledGrid>
      </Grid>
    </Box>
  );
};

BannerSection.propTypes = {
  question: PropTypes.string.isRequired,
};

export default BannerSection;
