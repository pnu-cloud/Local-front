import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Modal,
  Box,
  IconButton,
  Typography,
  Stack,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { LOCAL_COLOR } from '../../constants/localTheme';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 800,
  bgcolor: LOCAL_COLOR.backWhite,
  border: 'none',
  boxShadow: 4,
  p: 4,
};

const ApplyModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    birth: '',
    certification: '',
    portfolio: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      certification: formData.certification,
      portfolio: formData.portfolio,
    };

    try {
      const response = await axios.post('https://life.pnu.app/members/1/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography sx={{ fontSize: 18, fontWeight: 700 }}>지원서 작성</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Typography sx={{ fontSize: 14, whiteSpace: 'pre-line', mb: 3 }}>
          {`춘천 00 닭갈비집 서빙 알바 모집 지원서입니다.\n아래 항목에 맞게 내용을 작성해주세요.`}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
            <TextField
              sx={{
                width: '250px',
                '& .MuiInput-underline:before': {
                  borderBottomColor: 'rgba(0, 0, 0, 0.42)',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#F9E088',
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottomColor: 'rgba(0, 0, 0, 0.87)',
                },
                '& .MuiInputBase-input': {
                  color: 'black',
                },
              }}
              label="이름"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              variant="standard"
              InputLabelProps={{
                sx: {
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'black',
                },
                shrink: true,
              }}
            />
            <FormControl component="fieldset" margin="normal" sx={{ minWidth: 200 }}>
              <FormLabel component="legend" sx={{ fontSize: '14px', fontWeight: 700, color: 'black' }}>
                성별
              </FormLabel>
              <RadioGroup
                sx={{ display: 'flex', flexDirection: 'row' }}
                row
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      sx={{
                        '&.Mui-checked': {
                          color: '#F9E088',
                        },
                      }}
                    />
                  }
                  label="여성"
                />
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      sx={{
                        '&.Mui-checked': {
                          color: '#F9E088',
                        },
                      }}
                    />
                  }
                  label="남성"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
          <Box className="flex flex-col">
            <TextField
              sx={{
                width: '250px',
                '& .MuiInput-underline:before': {
                  borderBottomColor: 'rgba(0, 0, 0, 0.42)',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#F9E088',
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottomColor: 'rgba(0, 0, 0, 0.87)',
                },
              }}
              variant="standard"
              label="생년월일"
              name="birth"
              type="date"
              value={formData.birth}
              onChange={handleChange}
              margin="normal"
              InputLabelProps={{
                sx: {
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'black',
                },
                shrink: true,
              }}
            />

            <TextField
              sx={{
                width: '100%',
                '& .MuiInput-underline:before': {
                  borderBottomColor: 'rgba(0, 0, 0, 0.42)',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#F9E088',
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottomColor: 'rgba(0, 0, 0, 0.87)',
                },
              }}
              variant="standard"
              label="자격사항"
              name="certification"
              type="text"
              value={formData.certification}
              onChange={handleChange}
              margin="normal"
              InputLabelProps={{
                sx: {
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'black',
                },
                shrink: true,
              }}
            />
          </Box>

          <TextField
            sx={{
              width: '100%',
              '& .MuiInput-underline:before': {
                borderBottomColor: 'rgba(0, 0, 0, 0.42)',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#F9E088',
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottomColor: 'rgba(0, 0, 0, 0.87)',
              },
            }}
            variant="standard"
            label="자기소개서 (300글자)"
            name="portfolio"
            multiline
            rows={10}
            value={formData.portfolio}
            onChange={handleChange}
            margin="normal"
            InputLabelProps={{
              sx: {
                fontSize: '14px',
                fontWeight: 700,
                color: 'black',
              },
              shrink: true,
            }}
          />
        </form>
        <Stack direction="row" justifyContent="flex-end" gap sx={{ marginTop: '40px' }}>
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{
              backgroundColor: 'none',
              color: 'black',
              fontSize: '14px',
              fontWeight: '700',
              borderColor: LOCAL_COLOR.gray,
            }}
          >
            취소
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: LOCAL_COLOR.yellow,
              color: 'white',
              fontSize: '14px',
              fontWeight: '700',
              boxShadow: 'none',
            }}
          >
            지원하기
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

// PropTypes validation
ApplyModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ApplyModal;
