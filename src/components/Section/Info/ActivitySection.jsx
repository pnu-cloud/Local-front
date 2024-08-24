import React, { useState } from 'react';
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
} from '@mui/material';

const ActivitySection = () => {
  const [activityType, setActivityType] = useState('');
  const handleActivityTypeChange = (e) => {
    setActivityType(e.target.value);
    setActivityType(e.target.value);
  };

  const jobPostings = [
    {
      id: 1,
      category: '아르바이트',
      region: '춘천 OO구',
      task: '춘천 닭갈비 서빙알바',
      distance: '버스 평균 20분 소요',
    },
    {
      id: 2,
      category: '아르바이트',
      region: '춘천 OO구',
      task: '춘천 닭갈비 서빙알바',
      distance: '버스 평균 20분 소요',
    },
    {
      id: 3,
      category: '아르바이트',
      region: '춘천 OO구',
      task: '춘천 닭갈비 서빙알바',
      distance: '버스 평균 20분 소요',
    },
    {
      id: 3,
      category: '아르바이트',
      region: '춘천 OO구',
      task: '춘천 닭갈비 서빙알바',
      distance: '버스 평균 20분 소요',
    },
  ];
  const ActivityVolunteer = () => {
    return (
      <Box sx={{ mt: 4 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 18 }}>2. 봉사 활동</Typography>
        <Box sx={{ width: 700, background: '#FAFAFA', padding: 2 }}>
          <Stack direction="row" alignItems="center">
            <Typography type="number" sx={{ fontSize: 15, fontWeight: 500, paddingRight: 3 }}>
              목표 봉사 활동 시간
            </Typography>
            <TextField
              sx={{
                width: 100,
                margin: 0,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderRadius: 10,
                    borderColor: '#D9D9D9', // Default border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#F9E088', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#F9E088', // Border color when focused
                  },
                  '& input': {
                    height: 37, // Adjust input height to fit the fieldset
                    padding: '8px 14px', // Adjust padding to align text correctly
                    boxSizing: 'border-box',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'gray', // Label color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'purple', // Label color when focused
                },
              }}
            />
            <Typography sx={{ fontSize: 15, fontWeight: 500, paddingLeft: 1 }}>시간</Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#F9E088',
                color: 'black',
                fontWeight: 700,
                height: 42,
                width: 102,
                boxShadow: 'none',
                marginLeft: 'auto',
              }}
            >
              지원하기
            </Button>
          </Stack>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            목표한 봉사시간은 1365, Nice를 통해 확인하실 수 있습니다. <br />
            달성 가능한 봉사시간을 신중히 설정해주세요. 최소 30시간부터 작성 가능합니다.
          </Typography>
        </Box>
      </Box>
    );
  };

  const WorkActivity = () => {
    return (
      <Box sx={{ mt: 4 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 18 }}>2. 경제 활동</Typography>
        <Box sx={{ width: 700, background: '#FAFAFA', padding: 2 }}>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ fontSize: 15, fontWeight: 500, paddingRight: 3 }}>원하는 생활 지역</Typography>
            <TextField
              sx={{
                width: 400,
                marginLeft: 'auto',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderRadius: 10,
                    borderColor: '#D9D9D9', // Default border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#F9E088', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#F9E088', // Border color when focused
                  },
                  '& input': {
                    height: 37, // Adjust input height to fit the fieldset
                    padding: '8px 14px', // Adjust padding to align text correctly
                    boxSizing: 'border-box',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'gray', // Label color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'purple', // Label color when focused
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#F9E088',
                color: 'black',
                fontWeight: 700,
                height: 42,
                width: 102,
                boxShadow: 'none',
                marginLeft: 2,
              }}
            >
              검색
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }} alignItems="center">
            <Typography sx={{ fontSize: 15, fontWeight: 500, paddingRight: 3 }}>원하는 근무 기간</Typography>
            <Checkbox /> 한 달
            <Checkbox /> 두 달
            <Checkbox /> 연장 근무 (가능)
          </Stack>

          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx>
                  <TableCell>카테고리</TableCell>
                  <TableCell>상세 지역</TableCell>
                  <TableCell>업무</TableCell>
                  <TableCell>거리</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jobPostings.map((post) => (
                  <TableRow key={post.id} sx={{ '&:hover': { backgroundColor: '#F9E08880', cursor: 'pointer' } }}>
                    <TableCell>{post.category}</TableCell>
                    <TableCell>{post.region}</TableCell>
                    <TableCell>{post.task}</TableCell>
                    <TableCell>{post.distance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    );
  };
  return (
    <Box sx={{ width: '70%', display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
        1. 봉사활동과 아르바이트 중 어느 활동을 선호하시나요?
      </Typography>
      <RadioGroup row value={activityType} onChange={handleActivityTypeChange} sx={{ fontSize: 14, fontWeight: 500 }}>
        <FormControlLabel
          value="volunteer"
          control={<Radio sx={{ '&.Mui-checked': { color: '#F9E088' } }} />}
          label="봉사 활동"
        />
        <FormControlLabel
          value="work"
          control={<Radio sx={{ '&.Mui-checked': { color: '#F9E088' } }} />}
          label="경제 활동"
        />
      </RadioGroup>
      {activityType === 'volunteer' && (
        <div>
          <Box>
            <ActivityVolunteer />
          </Box>
          <Box sx={{ opacity: 0.3 }}>
            <WorkActivity />
          </Box>
        </div>
      )}
      {activityType === 'work' && (
        <div>
          <Box sx={{ opacity: 0.3 }}>
            <ActivityVolunteer />
          </Box>
          <Box>
            <WorkActivity />
          </Box>
        </div>
      )}
    </Box>
  );
};

export default ActivitySection;
