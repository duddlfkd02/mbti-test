import { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";
import TestResultList from "../components/TestResultList";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const TestResult = () => {
  const [results, setResults] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchResults = async () => {
    const data = await getTestResults();
    console.log("getTestResults=>>", data);
    setResults(data);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleUpdate = () => {
    fetchResults();
  };

  const handleDelete = () => {
    fetchResults();
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-5">
      <div className="bg-white max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          ✨모든 테스트 결과✨
        </h1>
        <TestResultList
          results={results}
          user={user}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default TestResult;
