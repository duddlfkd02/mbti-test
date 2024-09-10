import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "../api/auth";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [nickname, setNickname] = useState(user?.nickname || "");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedbackMessage("");

    try {
      const token = localStorage.getItem("accessToken");
      const response = await updateProfile(token, nickname);
      console.log(response);

      if (response.success) {
        setUser((prevState) => ({
          ...prevState,
          nickname: response.nickname,
        }));
        setFeedbackMessage("프로필이 성공적으로 업데이트되었습니다.");
        setNickname(response.nickname); // 닉네임을 새 값으로 설정
        setNickname("");
      } else {
        alert("닉네임 변경에 실패했습니다.");
      }
    } catch (error) {
      console.error("Failed to update nickname:", error);
      alert("닉네임 변경에 실패했습니다.");
    } finally {
      //변경되면 무조건 살행 종료!
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex p-8 flex-col justify-center align-middle items-center text-center">
      <h1 className="text-3xl font-extrabold ">💡 프로필 수정 💡</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h3 className="text-ls mt-8 text-rose-400">
            현재 닉네임: {user?.nickname}
          </h3>
          <input
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            placeholder="닉네임을 입력하세요"
            required
            className="w-60 p-4 mt-8 mb-10 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-40 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-full transition"
        >
          {isLoading ? "업데이트 중..." : "프로필 업데이트"}
        </button>
      </form>
      {feedbackMessage && <p className="mt-8">{feedbackMessage}</p>}
    </div>
  );
};

export default Profile;
