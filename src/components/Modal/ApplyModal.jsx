import React, { useState } from 'react';
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
  Select,
  MenuItem,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { LOCAL_COLOR } from '../../constants/localTheme';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '600px',
  height: '744px',
  bgcolor: LOCAL_COLOR.backWhite,
  border: 'none',
  boxShadow: 4,
  p: 4,
};

const ApplyModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    sex: '',
    birth: '',
    certificate: '',
    introduction: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack>
          <Typography sx={{ fontSize: '18px', fontWeight: '700' }}>지원서 작성</Typography>
          <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
            <CloseIcon />
          </IconButton>
          <Typography
            className="pt-2"
            sx={{
              fontSize: '14px',
              whiteSpace: 'pre-line',
            }}
          >
            {`춘천 00 닭갈비집 서빙 알바 모집 지원서입니다.
아래 항목에 맞게 내용을 작성해주세요.`}
          </Typography>
        </Stack>
        <Stack direction="row">
          <form onSubmit={handleSubmit}>
            <TextField label="이름" name="name" value={formData.name} onChange={handleChange} />
          </form>
          <FormControl component="fieldset" fullWidth margin="normal">
            <Typography variant="subtitle1">성별</Typography>
            <RadioGroup name="gender" value={formData.gender} onChange={handleChange} row>
              <FormControlLabel value="남성" control={<Radio />} label="남성" />
              <FormControlLabel value="여성" control={<Radio />} label="여성" />
            </RadioGroup>
          </FormControl>
        </Stack>
        <TextField
          label="생년월일"
          name="dob"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={formData.dob}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </Box>
    </Modal>
  );
};

export default ApplyModal;
