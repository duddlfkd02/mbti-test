import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const token = localStorage.getItem("accessToken");

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [user, setUser] = useState(null);

  //token 있으면 불러오기
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token, userData) => {
    if (token) {
      localStorage.setItem("accessToken", token);
      setIsAuthenticated(true);
      setUser(userData); // 로그인 시 사용자 정보를 설정
    } else {
      console.error("로그인 실패: 토큰이 없습니다.");
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
    setUser(null); // 로그아웃 시 사용자 정보를 설정
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
