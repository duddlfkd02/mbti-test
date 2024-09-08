import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    console.log("전송된 formData 확인용!!!!! ====>", formData);
    try {
      const response = await register({
        userId: formData.userId,
        password: formData.password,
        nickname: formData.nickname,
      });
      console.log("회원가입 응답:", response);

      if (response.success) {
        alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
        navigate("/login");
      } else {
        throw new Error("토큰이 응답에 포함되지 않았습니다.");
      }
    } catch (error) {
      console.error("회원가입 중 오류:", error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
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
