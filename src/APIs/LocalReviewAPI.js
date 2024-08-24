import axios from 'axios';

const LocalReviewAPI = async (local) => {
  try {
    const response = await axios.get(`https://life.pnu.app/infra/review/${local}`);
    return response.data; // 데이터를 그대로 반환
  } catch (error) {
    console.error('Error fetching dormitories:', error);
    throw error; // 필요하다면 에러를 호출한 쪽으로 전달
  }
};
export default LocalReviewAPI;
