import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Layout = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    const confirmLogout = window.confirm("로그아웃 하시겠습니까?");
    if (confirmLogout) {
      logout();
      navigate("/");
    }
  };

  return (
    <div>
      <header>
        <nav className="w-full flex items-center justify-between bg-white border-b-2 border-gray-100 p-8 mb-10 ">
          <Link
            to="/"
            className="text-white bg-rose-400 px-4 py-2 font-medium text-lg rounded-full hover:bg-rose-300 transition"
          >
            Home
          </Link>
          <div className="space-x-10 font-medium text-lg">
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="p-2 hover:bg-slate-100 rounded-full "
                >
                  😊 Profile
                </Link>
                <Link
                  to="/test"
                  className="p-2 hover:bg-slate-100 rounded-full "
                >
                  👩🏻‍💻 Test
                </Link>
                <Link
                  to="/results"
                  className="p-2 hover:bg-slate-100 rounded-full"
                >
                  🔍 Result
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white bg-indigo-400 px-4 py-2 font-medium text-lg rounded-full hover:bg-indigo-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-white bg-indigo-400 px-4 py-3 font-medium text-lg rounded-full hover:bg-indigo-600 transition"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
