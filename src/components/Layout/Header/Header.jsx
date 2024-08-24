import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab, Stack, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { LOCAL_HEIGHT, LOCAL_COLOR } from '../../../constants/localTheme';
import SearchSection from '../../../components/Section/SearchSection';
import { ReactComponent as Logo } from '../../../assets/logo.svg';

const StyledTab = styled(Tab)(() => ({
  width: '8rem',
  color: 'black',
  '&.Mui-selected': {
    fontWeight: 700,
    color: 'black',
  },
  fontWeight: 500,
}));

const Header = () => {
  const location = useLocation();
  const routes = ['/', '/infra', '/matching', '/review'];
  const curTab = routes.indexOf(location.pathname);
  const validTabIndex = curTab !== -1 ? curTab : 0;

  return (
    <AppBar position="fixed" className="h-14 sm:h-header !bg-white px-10" sx={{ height: LOCAL_HEIGHT.header }}>
      <Toolbar className="flex items-center justify-between h-full">
        <Link to="/">
          <Logo />
        </Link>
        <Tabs
          value={validTabIndex}
          aria-label="nav tabs"
          className="items-center mr-20 text-black"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: LOCAL_COLOR.green,
              height: '4px',
              bottom: '0px',
            },
            '& .MuiTab-root': {
              minHeight: 'unset',
              height: LOCAL_HEIGHT.header,
              display: 'flex',
              alignItems: 'center',
            },
          }}
        >
          <StyledTab label="Home" component={Link} to="/" />
          <StyledTab label="지역 인프라" component={Link} to="/infra" />
          <StyledTab label="공고 매칭" component={Link} to="/matching" />
          <StyledTab label="지역 후기" component={Link} to="/review" />
        </Tabs>
        <SearchSection />
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
