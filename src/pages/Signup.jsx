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
        alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
        navigate("/login");
      } else {
        alert("다른 아이디나 비밀번호로 가입해주세요");
        throw new Error("토큰이 응답에 포함되지 않았습니다.");
      }
    } catch (error) {
      if (error.response) {
        console.log("서버 응답 확인:", error.response.data); // 서버가 반환한 메시지를 출력

        // 서버 응답에서 중복된 아이디 관련 메시지 확인
        if (error.response.status === 409) {
          alert("이미 존재하는 아이디입니다. 다른 아이디를 사용해주세요.");
        } else {
          alert("회원가입에 실패했습니다. 다시 시도해주세요.");
        }
      } else {
        console.log("요청 오류:", error.message);
      }
    }
  };

  return (
    <div className="w-full flex mt-16 flex-col justify-center align-middle items-center text-center">
      <h1 className="text-3xl font-extrabold ">🥳 회원가입 🥳</h1>
      <AuthForm mode="signup" onSubmit={handleSignup} />
      <div className="mt-10">
        <p className="text-sm text-gray-600">
          이미 계정이 있으신가요?{" "}
          <Link
            to="/login"
            className="font-semibold hover:text-indigo-500 hover:border-b-2 ml-2"
          >
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
