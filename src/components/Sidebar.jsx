import React from "react";
import { dashboardMenu } from "../utils/constant";
import sidebar from "../assets/moneyexch-for-light.png";

const Sidebar = () => {
  return (
    <>
      <div className="w-64 bg-[#fff] px-2 h-[100vh]">
        <img className="w-full my-5" src={sidebar} alt="" />
        <ul className="flex flex-col">
          {dashboardMenu?.map((element, index) => {
            return (
              <li key={index}>
                <a
                  href={element?.path}
                  className="flex items-center capitalize text-[1.2rem] py-3 pl-4 cursor-pointer duration-200 
                hover:bg-[#eee] gap-3"
                >
                  <span>{element?.icon}</span> {element?.item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
