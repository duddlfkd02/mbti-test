import axios from "axios";

const API_URL = "https://south-showy-garden.glitch.me/testResults";

export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  console.log("getTestResults", response);
  return response.data;
};

export const createTestResult = async (resultData) => {
  console.log("createTestResult 호출!!!!!!");
  const response = await axios.post(API_URL, resultData);
  console.log(response);
  return response.data;
};

export const deleteTestResult = async (id) => {
  console.log("deleteTestResult 호출!");
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  //공개비공개
  const response = await axios.patch(`${API_URL}/${id}`, { visibility });
  console.log("서버 응답 확인 =>", response.data);
  return response.data;
};
