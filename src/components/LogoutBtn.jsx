import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();

    // Navigate to the login page
    navigate("/login");
  };

  return (
    <div className="w-full bg-[#fff] rounded-md my-2 p-2 py-3 pr-9 font-semibold text-[#474747] text-end">
      <button
        onClick={handleLogout}
        className="text-[1.2rem] border p-2 px-4 rounded-md bg-[#dc3545] text-[#fff] hover:shadow-[0px_2px_12px_-2px_#474747] duration-200 uppercase"
      >
        logout
      </button>
    </div>
  );
};

export default LogoutBtn;
