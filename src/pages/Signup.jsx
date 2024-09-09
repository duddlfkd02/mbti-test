import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    console.log("전송된 formData 확인용!!!!! ====>", formData);
    try {
      const response = await register({
        id: formData.userId,
        password: formData.password,
        nickname: formData.nickname,
      });
      console.log("회원가입 응답:", response);

      if (response.success) {
        // register(response.token);
        navigate("/login");
      } else {
        throw new Error("토큰이 응답에 포함되지 않았습니다.");
      }
    } catch (error) {
      if (error.response) {
        console.log("서버 응답 확인:", error.response.data); // 서버가 반환한 메시지를 출력
      } else {
        console.log("요청 오류:", error.message);
      }
    }
  };

  return (
    <div>
      <div>
        <h1>회원가입</h1>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div>
          <p>
            이미 계정이 있으신가요? <Link to="/login">로그인</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
