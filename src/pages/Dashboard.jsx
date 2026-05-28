import React from "react";
import SummaryCards from "../components/SummaryCards";
import Barchart from "../components/Barchart";
import RecentTransactions from "../components/RecentTransactions";

const Dashboard = () => {
  return (
    <div className="p-4">
      <SummaryCards />
      <Barchart />
      <RecentTransactions />
    </div>
  );
};

export default Dashboard;
