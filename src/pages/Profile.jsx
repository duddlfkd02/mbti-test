import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "../api/auth";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext); // 전역에서 user 정보 가져오기
  const [nickname, setNickname] = useState(user?.nickname || ""); // 닉네임 초기값 설정
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

      if (response.success) {
        setFeedbackMessage("프로필이 성공적으로 업데이트되었습니다.");
        setUser({ ...user, nickname }); // 전역 상태의 user 정보 업데이트
      } else {
        setFeedbackMessage("프로필 업데이트에 실패했습니다.");
      }
    } catch (error) {
      console.error("프로필 업데이트 중 오류:", error);
      setFeedbackMessage("프로필 업데이트 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>프로필 수정</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>닉네임</label>
          <input
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            placeholder="닉네임을 입력하세요"
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "업데이트 중..." : "프로필 업데이트"}
        </button>
      </form>
      {feedbackMessage && <p>{feedbackMessage}</p>}
    </div>
  );
};

export default Profile;
