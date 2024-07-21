import React from "react";
import Sidebar from "./Sidebar";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { loanReportTabs } from "../utils/constant";
import LogoutBtn from "./LogoutBtn";
import Pagination from "./Pagination";
import { AiOutlineSearch } from "react-icons/ai";
import { FaFileExport } from "react-icons/fa";
import { FaSortAmountDownAlt } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LoanReports = () => {
  return (
    <div className="flex gap-1">
      <Sidebar />
      <div className="flex flex-col w-full p-5">
        <LogoutBtn />
        <div className="w-full bg-[#fff] h-[88vh] rounded-md my-2 p-5 px-16">
          <div className="text-[3.5rem] text-center font-semibold text-[#474747]">
            Loan Reports
          </div>
          <TabGroup>
            <TabList className="flex gap-4 mt-6">
              {loanReportTabs?.map((element, idx) => {
                return (
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "p-2 px-4 rounded-md font-semibold text-[#474747] text-[1.35rem]",
                        selected ? "bg-[#eee]" : "bg-[#ccc]"
                      )
                    }
                  >
                    {element?.tabName}
                  </Tab>
                );
              })}
            </TabList>
            <TabPanels>
              {loanReportTabs?.map((tab, tabIndex) => {
                return (
                  <>
                    <TabPanel key={tabIndex}>
                      {tab?.table ? (
                        <>
                          <div className="flex items-center justify-between mt-9 mb-5">
                            <div className="flex items-center gap-3">
                              <input
                                className="w-64 p-2 rounded text-[1.3rem] focus:outline-none text-skin-white bg-[#cfd4d8]"
                                type="search"
                                name=""
                                id=""
                                placeholder="search"
                              />
                              <button
                                type="button"
                                className="bg-[#169c59] text-[1.2rem] flex items-center gap-1 rounded px-2.5 font-semibold p-1.5  text-md text-[#fff] hover:bg-[#0d8247] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                              >
                                <AiOutlineSearch className="text-xl font-bold" />{" "}
                                Search
                              </button>
                            </div>

                            <div className="flex items-center gap-3">
                              <button
                                type="button"
                                className="bg-[#0d6efd] text-[1.25rem] flex items-center gap-1 rounded px-2.5 font-semibold p-1.5  text-md text-[#fff] hover:bg-[#0b5ed7] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                              >
                                <FaFileExport className="text-xl font-bold" />{" "}
                                Export
                              </button>

                              <div className="flex items-center gap-2 text-[1.3rem] border border-[#474747] rounded-md p-1.5 px-2.5 cursor-pointer hover:bg-[#ddd] duration-200">
                                Sort{" "}
                                <span>
                                  <FaSortAmountDownAlt />
                                </span>
                              </div>
                            </div>
                          </div>
                          <table className="w-full border-collapse">
                            <thead>
                              <tr>
                                {tab.table.map((element, index) => (
                                  <th
                                    key={index}
                                    className="border p-2 capitalize w-64 whitespace-nowrap w-96 border"
                                  >
                                    {element?.heading}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {tab.table[0].numbers.map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                  {tab.table.map((item, index) => (
                                    <td
                                      key={index}
                                      className={`border p-2 font-semibold ${
                                        item.heading === "status"
                                          ? item.statuses[rowIndex]
                                              ?.trim()
                                              .toLowerCase() === "pending"
                                            ? "text-[#f09931]"
                                            : item.statuses[rowIndex]
                                                ?.trim()
                                                .toLowerCase() === "denied"
                                            ? "text-[#f60002]"
                                            : item.statuses[rowIndex]
                                                ?.trim()
                                                .toLowerCase() === "successful"
                                            ? "text-[#4db925]"
                                            : ""
                                          : ""
                                      }`}
                                    >
                                      {item.numbers
                                        ? item.numbers[rowIndex]
                                        : item.statuses[rowIndex]}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <Pagination />
                        </>
                      ) : (
                        <p className="mt-9">No data available</p>
                      )}
                    </TabPanel>
                  </>
                );
              })}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
};

export default LoanReports;
