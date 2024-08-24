import React, { useState } from 'react';
import { Stack, Typography, Button, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { LOCAL_COLOR } from '../../constants/localTheme';
import redMark from '../../assets/redMark.svg';
import DetailPage from './DetailPage';

const Infra = () => {
  const [localSearch, setLocalSearch] = useState('');
  const [searchValue, setSearchValue] = useState(' -- ');

  return (
    <div className="mx-24">
      <Stack direction="row" className="items-center justify-between ">
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
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
        />
        <Button
          className="ml-5 font-bold text-18px_medium"
          sx={{ backgroundColor: LOCAL_COLOR.yellow, color: 'black', fontWeight: 700, boxShadow: 'none' }}
          variant="contained"
          onClick={() => setSearchValue(localSearch)}
        >
          검색
        </Button>
      </Stack>
      <div
        className="flex items-center pt-15 mb-4"
        style={{
          right: 0,
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
          {searchValue}
        </Typography>
      </div>
      <DetailPage region={searchValue} />
    </div>
  );
};

export default Infra;
