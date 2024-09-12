import baseInstance from "../axiosInstance/base";

export const register = async (userData) => {
  const response = await baseInstance.post("/register", userData);
  console.log(response.data);
  return response.data;
};

export const login = async (userData) => {
  const response = await baseInstance.post("/login", userData);
  console.log(response.data);
  return response.data;
};

export const getUserProfile = async (token) => {
  // console.log("token 확인 =>>", token);
  const response = await baseInstance.get("/user", {
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

  const response = await baseInstance.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("서버 응답 확인 =>", response.data);
  return response.data;
};
