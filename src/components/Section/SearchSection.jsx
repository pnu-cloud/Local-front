import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchSection = () => {
  return (
    <TextField
      className="border-gray text-18px_medium"
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
  );
};

export default SearchSection;
