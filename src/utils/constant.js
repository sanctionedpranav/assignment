import { LuMonitor } from "react-icons/lu";
import { BsReceipt } from "react-icons/bs";
import { BsClipboard2 } from "react-icons/bs";

export const dashboardMenu = [
  {
    item: "dashboard",
    path: "/dashboard",
    icon: <LuMonitor />
  },
  {
    item: "loan applications",
    path: "/loan-application",
    icon: <BsClipboard2 />
  },
  {
    item: "loan reports",
    path: "/loan-reports",
    icon: <BsReceipt />
  },
]

export const loanReportTabs = [
  {
    tabName: "In Progress Loan Application",
    table: [
      {
        heading: "application no",
        numbers: [123, 124, 125],
      },
      {
        heading: "status",
        statuses: ["pending", "denied", "successful"],
      }
    ]
  },
  {
    tabName: "Submitted Loan Application",
    table: [
      {
        heading: "application no",
        numbers: [123, 124, 125],
      },
      {
        heading: "Application Date",
        statuses: ["17th, July 2024", "17th, July 2024", "17th, July 2024"],
      },
      {
        heading: "Application Status columns",
        statuses: ["pending", "denied", "successful"],
      },
    ]
  }
]

export const steps = ['Applicant personal details', 'Applicant contact details', 'Document upload'];