import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
import JobsAPI from '../../../APIs/JobsAPI';
import RecruitSection from '../RecruitSection';

const ActivitySection = () => {
  const [activityType, setActivityType] = useState('');
  const handleActivityTypeChange = (e) => {
    setActivityType(e.target.value);
    setActivityType(e.target.value);
  };
  const [selectJob, setSelectedJob] = useState(null);
  const handleButtonClick = (jobId) => {
    // 지원하기 버튼이 눌렸을 때, 부모 컴포넌트에 jobId를 전달
    console.log('ID' + jobId);
    setSelectedJob(jobId);
  };

  const ActivityVolunteer = () => {
    const navigate = useNavigate();

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
              onClick={() => navigate('/matchingfinish')}
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

  const WorkActivity = ({ jsonData }) => {
    console.log(jsonData);

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
                  <TableCell>ID</TableCell>
                  <TableCell>카테고리</TableCell>
                  <TableCell>상세 지역</TableCell>
                  <TableCell>업무</TableCell>
                  <TableCell>거리</TableCell>
                  <TableCell>차</TableCell>
                  <TableCell>대중교통</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray(jsonData) &&
                  jsonData.map((post) => (
                    <TableRow
                      key={post.jobId}
                      sx={{ '&:hover': { backgroundColor: '#F9E08880', cursor: 'pointer' } }}
                      onClick={() => handleButtonClick(post.jobId)}
                    >
                      <TableCell>{post.jobId}</TableCell>
                      <TableCell>{post.category}</TableCell>
                      <TableCell>{post.local}</TableCell>
                      <TableCell>{post.description}</TableCell>
                      <TableCell>{post.distance}</TableCell>
                      <TableCell>{post.timeByCar}</TableCell>
                      <TableCell>{post.timeByTransport}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    );
  };
  //const [regionSearch1, setRegionSearch] = useState('ALL');

  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { regionSearch } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await JobsAPI(regionSearch); // 비동기 함수의 결과를 동기적으로 기다림
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };
    fetchData();
  }, [regionSearch]);
  console.log(jsonData);
  if (loading) {
    return <div>loading</div>; // 로딩 중일 때 표시할 컴포넌트
  }
  if (!loading && jsonData) {
    if (selectJob) {
      return <RecruitSection jobId={3} />; // selectJob이 true일 때 렌더링되는 JSX
    } else {
      return (
        <Box sx={{ width: '70%', display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
            1. 봉사활동과 아르바이트 중 어느 활동을 선호하시나요?
          </Typography>
          <RadioGroup
            row
            value={activityType}
            onChange={handleActivityTypeChange}
            sx={{ fontSize: 14, fontWeight: 500 }}
          >
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
                <WorkActivity jsonData={jsonData} />
              </Box>
            </div>
          )}
          {activityType === 'work' && (
            <div>
              <Box sx={{ opacity: 0.3 }}>
                <ActivityVolunteer />
              </Box>
              <Box>
                <WorkActivity jsonData={jsonData} />
              </Box>
            </div>
          )}
        </Box>
      );
    }
  }
};

export default ActivitySection;
