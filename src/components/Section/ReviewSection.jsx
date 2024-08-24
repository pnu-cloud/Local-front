import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';
import axios from 'axios';
import { autoType } from 'd3';

// ReviewBox 컴포넌트 정의
const ReviewBox = ({ props }) => {
  return (
    <Box
      elevation={3}
      sx={{
        backgroundColor: '#FAFAFA',
        borderRadius: 1,
        marginTop: 1,
        padding: 3,
        width: 530,
      }}
    >
      <Typography variant="body1" fontWeight="bold">
        {props.name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {props.local}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        {props.description}
      </Typography>
    </Box>
  );
};

const ReviewSection = ({ reviews, localSearch }) => {
  const [reviewText, setReviewText] = useState('');

  const handleInputChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const newReview = {
        description: reviewText,
        local: localSearch,
      };

      // API에 POST 요청
      await axios.post('https://life.pnu.app/infra/review/1', newReview);

      setReviewText(''); // 제출 후 텍스트 필드 초기화
      window.location.reload();
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <Box sx={{ width: 600 }}>
      <Typography
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: 24,
        }}
      >
        로컬 라이프 후기
      </Typography>

      {/* 리뷰 데이터를 map을 사용해 동적으로 렌더링 */}
      <div>
        {reviews.map((review) => (
          <ReviewBox props={review} key={review.id} />
        ))}
      </div>

      {/* 사용자가 리뷰를 입력하는 섹션 */}
      <Box
        elevation={3}
        sx={{
          backgroundColor: '#F9E088B2',
          borderRadius: 1,
          marginTop: 1,
          padding: 3,
          width: 530,
          marginLeft: 'auto',
        }}
      >
        <Typography variant="body1" fontWeight="bold">
          User 1
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          당신의 후기를 남겨주세요
        </Typography>
      </Box>

      <Stack direction="row" alignItems="center" sx={{ mt: 3 }}>
        <TextField
          variant="outlined"
          placeholder="Review"
          value={reviewText}
          onChange={handleInputChange}
          sx={{ mr: 1, width: '100%' }}
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
          className="font-bold text-18px_medium"
          sx={{ height: 60, backgroundColor: '#F9E088B2', color: 'black', fontWeight: 700, boxShadow: 'none' }}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default ReviewSection;
