import React, { useState } from "react";
import { Plus } from "lucide-react";
import Dashboard from "../pages/Dashboard";
import Transaction from "../pages/Transaction";
import Analytics from "../pages/Analytics";
import {Link} from 'react-router-dom'
import AddModel from "./AddModel";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full h-20 bg-white/10 flex justify-between items-center p-4 border-b-2 border-white/10">
      <div className="flex items-center gap-2">
        <img
          src="expensetrack-logo.svg"
          alt=""
          className="h-12 w-12  rounded-3xl"
        />
        <h1 className="font-bold text-4xl bg-linear-to-r from-[#639922] to-[#639922]/30 text-transparent bg-clip-text">
          Expense Track
        </h1>
      </div>
      <div>
        <ul className="flex items-center gap-10">
          <li className=" px-5 py-3 rounded-xl hover:bg-black/50 transition-all duration-300 ease-in-out font-semibold text-xl">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="px-5 py-3 rounded-xl hover:bg-black/50 transition-all duration-300 ease-in-out font-semibold text-xl">
            <Link to="/transaction">Transactions</Link>
          </li>
          <li className="px-5 py-3 rounded-xl hover:bg-black/50 transition-all duration-300 ease-in-out font-semibold text-xl">
            <Link to="/analytics">Analytics</Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="flex justify-center items-center gap-2 px-8 py-3 bg-[#639922] rounded-2xl hover:scale-105 transition-all duration-300 ease font-bold text-xl" onClick={() => setShowModal(true)}>
          <Plus />
          Add Transaction
        </button>
        {showModal && <AddModel onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
};

export default Navbar;
