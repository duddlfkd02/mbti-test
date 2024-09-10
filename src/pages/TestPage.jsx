import TestForm from "../components/TestForm";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const TestPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);
    const resultData = {
      userId: user.id,
      nickname: user.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };
    await createTestResult(resultData);
    navigate("/results");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-10 text-center">✨MBTI 테스트✨</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
};

export default TestPage;
