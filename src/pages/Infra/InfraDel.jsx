import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography, Button, Box, Tabs, Tab } from '@mui/material';
import SearchSection from '../../components/Section/SearchSection';
import { LOCAL_COLOR } from '../../constants/localTheme';
import { styled } from '@mui/system';
import redMark from '../../assets/redMark.svg';

const StyledTab = styled(Tab)(() => ({
  fontSize: '18px',
  width: '150px',
  height: '58px',
  color: 'black',
  '&.Mui-selected': {
    color: 'black',
    border: 'none',
    backgroundColor: LOCAL_COLOR.backWhite,
  },
  fontWeight: 500,
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && (
        <Box p={3} sx={{ height: '774px', backgroundColor: LOCAL_COLOR.backWhite }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

const Infra = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Stack direction="row" className="items-center justify-between">
        <Typography className="mr-5 text-14px_medium" sx={{ fontWeight: 700 }}>
          정보를 알고싶은 지역을 선택해주세요
        </Typography>
        <SearchSection />
        <Button
          className="ml-5 font-bold text-18px_medium"
          sx={{ backgroundColor: LOCAL_COLOR.yellow, color: 'black', fontWeight: 700, boxShadow: 'none' }}
          variant="contained"
        >
          검색
        </Button>
      </Stack>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            display: 'flex',
            '& .MuiTabs-indicator': {
              display: 'none',
            },
            '& .MuiTab-root': {
              borderBottom: 'none',
            },
          }}
        >
          <StyledTab label="시설정보" />
          <StyledTab label="교통정보" />
          <StyledTab label="모의집값" />
          <div
            className="flex items-center"
            style={{
              position: 'absolute',
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
        </Tabs>
        <TabPanel value={value} index={0}>
          First
        </TabPanel>
        <TabPanel value={value} index={1}>
          Second
        </TabPanel>
        <TabPanel value={value} index={2}>
          Third
        </TabPanel>
      </Box>
    </div>
  );
};

export default Infra;
