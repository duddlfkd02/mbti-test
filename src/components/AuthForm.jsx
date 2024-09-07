import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = (mode) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
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
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="아이디"
        required
      />
      {mode === "signup" && (
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
          required
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
      )}

      <button type="button">{mode === "login" ? "로그인" : "회원가입"}</button>
    </form>
  );
};

export default AuthForm;
