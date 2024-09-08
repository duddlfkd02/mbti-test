import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const AuthForm = ({ mode, onSubmit }) => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    nickname: mode === "signup" ? "" : null,
  });

  const handleChange = (e) => {
    const inputName = e.target.name; //name속성 이용해서 동적인 값 저장하기 (id, password, nickname)
    const inputValue = e.target.value; //input에 입력하는 값
    setFormData({
      ...formData,
      [inputName]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData); // 부모 컴포넌트로 formData 전달
    }
    // navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4 ">
      <input
        type="text"
        name="userId"
        value={formData.userId}
        onChange={handleChange}
        placeholder="아이디"
        required
        className="w-50 p-4 m-4 border border-gray-300 rounded-lg"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호"
        minLength="4"
        required
        className="w-50 p-4 m-4 border border-gray-300 rounded-lg"
      />
      {mode === "signup" && (
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
          required
          className="w-50 p-4 m-4 border border-gray-300 rounded-lg"
        />
      )}

      <button type="submit">{mode === "login" ? "로그인" : "회원가입"}</button>
    </form>
  );
};

export default AuthForm;
