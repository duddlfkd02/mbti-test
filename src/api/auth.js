import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  console.log(response.data);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  console.log(response.data);
  return response.data;
};

export const getUserProfile = async (token) => {
  // console.log("token 확인 =>>", token);
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const updateProfile = async (token, nickname) => {
  console.log("updateProfile token 확인 =>>", token);
  console.log("updateProfile nickname 확인 =>>", token.nickname);
  const formData = new FormData();
  formData.append("nickname", nickname);

  const response = await axios.patch(`${API_URL}/profile`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("서버 응답 확인 =>", response.data);
  return response.data;
};
