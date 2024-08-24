import React from 'react';
import { Stack, Typography, Button, TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { LOCAL_COLOR } from '../../constants/localTheme';
import redMark from '../../assets/redMark.svg';

const Infra = () => {
  return (
    <>
      <Stack direction="row" className="items-center justify-between">
        <Typography className="mr-5 whitespace-nowrap text-14px_medium" sx={{ fontWeight: 700 }}>
          정보를 알고싶은 지역을 선택해주세요
        </Typography>
        <TextField
          className="w-[70%] border-gray text-18px_medium"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '9999px',
            },
          }}
          placeholder="Find"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          className="ml-5 font-bold text-18px_medium"
          sx={{ backgroundColor: LOCAL_COLOR.yellow, color: 'black', fontWeight: 700, boxShadow: 'none' }}
          variant="contained"
        >
          검색
        </Button>
      </Stack>
      <div
        className="flex items-center pt-15"
        style={{
          right: 0,
          height: '100%',
          justifyContent: 'flex-end',
        }}
      >
        <img src={redMark} />
        <Typography
          className="text-14px_medium"
          sx={{ fontWeight: '700', color: LOCAL_COLOR.darkGray, marginX: '20px' }}
        >
          선택한 지역:
        </Typography>
        <Typography className="text-14px_medium" sx={{ color: LOCAL_COLOR.darkGray, marginX: '10px' }}>
          --
        </Typography>
      </div>
      <Box className="bg-backWhite" sx={{ height: '774px' }}></Box>
    </>
  );
};

export default Infra;
