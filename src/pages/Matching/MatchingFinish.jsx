import React from 'react';
import { Stack, Typography } from '@mui/material';

const MatchingFinish = () => {
  return (
    <Stack display="flex" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
      <Typography textAlign="center" sx={{ fontSize: 50, fontWeight: 700, padding: 20 }}>
        신청 완료되었습니다.<br></br> 당신의 로컬 라이프를 즐겨보세요!
      </Typography>
    </Stack>
  );
};
export default MatchingFinish;
