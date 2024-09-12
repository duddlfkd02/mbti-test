import testInstance from "../axiosInstance/test";

export const getTestResults = async () => {
  const response = await testInstance.get("/testResults");
  // console.log("getTestResults", response);
  return response.data;
};

export const createTestResult = async (resultData) => {
  // console.log("createTestResult 호출!!!!!!");
  const response = await testInstance.post("/testResults", resultData);
  // console.log(response);
  return response.data;
};

export const deleteTestResult = async (id) => {
  console.log("deleteTestResult 호출!");
  const response = await testInstance.delete(`/testResults/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  //공개비공개
  const response = await testInstance.patch(`/testResults/${id}`, {
    visibility,
  });
  // console.log("서버 응답 확인 =>", response.data);
  return response.data;
};
