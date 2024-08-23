import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

const BannerSection = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacking={2}>
        <Grid item sx={8}>
          <Typography>안녕</Typography>
        </Grid>
        <Grid item sx={8}>
          <Typography>안녕</Typography>
        </Grid>
        <Grid item sx={8}>
          <Typography>안녕</Typography>
        </Grid>
        <Grid item sx={8}>
          <Typography>안녕</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerSection;
