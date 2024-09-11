import { createContext, useEffect, useState } from "react";
import { getUserProfile } from "../api/auth";

export const AuthContext = createContext();

const token = localStorage.getItem("accessToken");

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [user, setUser] = useState(null);

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
          setUser(null);
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    if (!user) {
      fetchUserProfile();
    }
  }, [user]);

  const login = (token, userData) => {
    if (token) {
      localStorage.setItem("accessToken", token);
      setIsAuthenticated(true);
      setUser(userData);
    } else {
      console.error("로그인 실패: 토큰이 없습니다.");
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
