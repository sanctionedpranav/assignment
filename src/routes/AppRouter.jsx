import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import LoanApplicationPage from "../pages/LoanApplicationPage";
import LoanReportPage from "../pages/LoanReportPage";
import { Paths } from "./path";

const AppRouter = () => {
  return (
    <Routes>
      <Route>
        <Route path={Paths.login} element={<LoginPage />} />
        <Route path={Paths.dashboard} element={<DashboardPage />} />
        <Route path={Paths.loanApplication} element={<LoanApplicationPage />} />
        <Route path={Paths.loanReports} element={<LoanReportPage />} />
        <Route path="*" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
