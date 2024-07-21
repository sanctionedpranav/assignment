import React, { useEffect, useState } from "react";
import { dashboardMenu } from "../utils/constant";
import { LuMonitor } from "react-icons/lu";
import Sidebar from "./Sidebar";
import LogoutBtn from "./LogoutBtn";

const Dashboard = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
    if (userCredentials && userCredentials.username) {
      setUsername(userCredentials.username);
    }
  }, [username]);

  return (
    <div className="flex gap-1">
      <Sidebar />
      <div className="flex flex-col w-full p-5">
        <LogoutBtn />
        <div className="w-full bg-[#fff] h-[88vh] rounded-md my-2 p-5  px-16 text-[3.5rem] font-semibold text-[#474747]">
          Welcome <span>{username}</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
