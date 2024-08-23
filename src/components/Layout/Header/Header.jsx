import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  IconButton,
  Toolbar,
  Tabs,
  Tab,
  Stack,
  TextField,
  InputAdornment,
  Button,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { LOCAL_HEIGHT, LOCAL_COLOR } from '../../../constants/localTheme';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { styled } from '@mui/system';

const StyledTab = styled(Tab)(() => ({
  color: 'black', // 기본 텍스트 색상
  '&.Mui-selected': {
    fontWeight: 700,
    color: 'black',
  },
  fontWeight: 500,
}));

const Header = () => {
  const location = useLocation();
  const routes = ['/', '/infra', '/matching'];
  const curTab = routes.indexOf(location.pathname);

  return (
    <AppBar position="fixed" className="h-14 sm:h-header !bg-white px-10" sx={{ height: LOCAL_HEIGHT.header }}>
      <Toolbar className="flex items-center justify-between h-full">
        <Link to="/header">
          <Logo />
        </Link>
        <Tabs
          value={curTab}
          aria-label="nav tabs"
          className="text-black"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: LOCAL_COLOR.green,
            },
          }}
        >
          <StyledTab
            label="Home"
            component={Link}
            to="/"
            sx={{
              '&.Mui-selected': {
                borderColor: LOCAL_COLOR.green,
              },
            }}
          />
          <StyledTab label="지역 인프라" component={Link} to="/infra" />
          <StyledTab label="공고 매칭" component={Link} to="/matching" />
        </Tabs>
        <TextField
          className="border-gray"
          sx={{ width: '600px' }}
          placeholder="Find"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Stack direction="row" className="items-center" spacing={1.5}>
          <Typography className="text-darkGray">User1님</Typography>
          <Button
            className="text-18px_medium"
            variant="contained"
            sx={{ backgroundColor: LOCAL_COLOR.green, boxShadow: 'none' }}
          >
            마이페이지
          </Button>
          <Button className="text-18px_medium" variant="outlined" sx={{ borderColor: '#D1D1D1', color: 'black' }}>
            로그아웃
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
