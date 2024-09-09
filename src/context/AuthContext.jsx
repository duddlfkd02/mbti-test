import { createContext, useEffect, useState } from "react";
import { getUserProfile } from "../api/auth";

export const AuthContext = createContext();

const token = localStorage.getItem("accessToken");

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        try {
          const userData = await getUserProfile(token);
          setIsAuthenticated(true);
          setUser(userData);
        } catch (error) {
          console.error("프로필 정보를 불러오는 데 실패했습니다.", error);
          setIsAuthenticated(false);
        }
      }
    };

    if (isAuthenticated) {
      fetchUserProfile();
    }
  }, [isAuthenticated, user]);

  const login = (token) => {
    if (token) {
      localStorage.setItem("accessToken", token); // 토큰을 로컬스토리지에 저장
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
