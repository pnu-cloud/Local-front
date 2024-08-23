import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Tabs, Tab, Stack, TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { LOCAL_HEIGHT, LOCAL_COLOR } from '../../../constants/localTheme';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { styled } from '@mui/system';

const StyledTab = styled(Tab)(({ selected }) => ({
  fontWeight: selected ? 700 : 500,
  color: 'black',
}));

const Header = () => {
  const location = useLocation();
  const routes = ['/', '/infra', '/matching'];
  const curTab = routes.indexOf(location.pathname);

  return (
    <AppBar position="fixed" className="h-14 sm:h-header !bg-white" sx={{ height: LOCAL_HEIGHT.header }}>
      <Toolbar className="flex items-center justify-between h-full">
        <Link to="/header">
          <Logo />
        </Link>
        <Tabs value={curTab} aria-label="nav tabs">
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
        <Stack direction="row" spacing={1} className="border-black">
          <Button variant="contained">로그인</Button>
          <Button variant="outlined">회원가입</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
