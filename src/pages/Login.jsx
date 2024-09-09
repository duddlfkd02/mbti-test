import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { login as loginAPI } from "../api/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    // console.log("전송된 formData 확인용!!!!! ====>", formData);
    try {
      const response = await loginAPI({
        id: formData.userId,
        password: formData.password,
      });

      if (response.accessToken) {
        // console.log("로그인 response:", response);
        // console.log("로그인 응답/accessToken:", response.accessToken);
        login(response.accessToken);
        navigate("/profile");
      } else {
        alert("로그인에 실패했습니다.");
      }
    } catch (error) {
      if (error.response.data) {
        console.log("서버 응답 확인:", error.response.data);
      } else {
        console.log("로그인 요청 오류:", error.message);
      }
    }
  };
  return (
    <div>
      <div>
        <h1>로그인</h1>
        <div className="flex flex-col">
          <AuthForm mode="login" onSubmit={handleLogin} />
        </div>

        <div>
          <p>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
