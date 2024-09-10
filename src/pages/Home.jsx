import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  const handleClick = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    } else {
      navigate("/profile");
    }
  };

  const MOCK_DATA = [
    {
      title: "성격 유형 검사",
      content:
        "자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.",
    },
    {
      title: "성격 유형 이해",
      content:
        "다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.",
    },
    {
      title: "팀 평가",
      content:
        "팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요.",
    },
  ];

  return (
    <div className="w-full flex p-8 flex-col justify-center align-middle items-center text-center">
      <h1 className="text-3xl font-extrabold ">⭐️ MBTI 테스트 ⭐️</h1>
      <p className="m-10 text-lg">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>

      <div className="w-full flex justify-between mb-10">
        {MOCK_DATA.map((data, index) => {
          return (
            <div key={index} className="m-4 p-10 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold leading-loose	">
                {data.title}
              </h3>
              <p>{data.content}</p>
            </div>
          );
        })}
      </div>

      {isAuthenticated ? (
        <div>
          <Link
            to="/results"
            className="w-56 bg-indigo-500 hover:bg-indigo-600 text-white font-bold p-4 rounded-full transition"
          >
            내 성격 알아보러 가기
          </Link>
        </div>
      ) : (
        <button
          onClick={handleClick}
          className="w-56 bg-indigo-500 hover:bg-indigo-600 text-white font-bold p-4 rounded-full transition"
        >
          마이페이지로 가기
        </button>
      )}
    </div>
  );
};

export default Home;
