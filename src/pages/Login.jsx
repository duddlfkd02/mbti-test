import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
// import { login as loginAPI } from "../api/auth"; //login 이름 중복으로 변경
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Login = () => {
  // const [id, setId] = useState("");
  // const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    console.log("전송된 formData 확인용!!!!! ====>", formData);
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/login",
        {
          userId: formData.userId,
          password: formData.password,
        }
      );
      const data = response.data;
      if (data.success) {
        login(data.accessToken);
        navigate("/mypage");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed");
    }
  };
  // const response = await loginAPI({
  //   userId: formData.userId, // response 콘솔 반환이 userId 담겨서 넘어옴
  //   password: formData.password,
  // });

  //   if (response.token) {
  //     login(response.token);
  //     console.log("로그인 응답:", response);
  //     navigate("/profile");
  //   } else {
  //     alert("로그인에 실패했습니다.");
  //   }
  // } catch (error) {
  //   if (error.response.data) {
  //     console.log("서버 응답 확인:", error.response.data);
  //   } else {
  //     console.log("로그인 요청 오류:", error.message);
  //   }

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
