import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { login as loginAPI } from "../api/auth"; //login 이름 중복으로 변경
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (formData) => {
    // console.log("전송된 formData 확인용!!!!! ====>", formData);
    try {
      const response = await loginAPI({
        userId: formData.userId, // response 콘솔 반환이 userId 담겨서 넘어옴
        password: formData.password,
      });

      if (response.token) {
        login(response.token);
        navigate("/profile");
      } else {
        alert("로그인에 실패했습니다.");
        console.log(response);
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
