import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import Layout from "../components/Layout";

import ProtectedRoute from "../components/ProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route
            path="profile"
            element={<ProtectedRoute element={Profile} />}
          />
          <Route path="test" element={<ProtectedRoute element={TestPage} />} />
          <Route
            path="results"
            element={<ProtectedRoute element={TestResultPage} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
