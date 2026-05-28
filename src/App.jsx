import React from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import {Routes,Route} from 'react-router-dom';
import Transaction from "./pages/Transaction";
import Analytics from "./pages/Analytics";

const App = () => {
  return (
    <div className="bg-slate-900 h-screen w-full text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/transaction" element={<Transaction />}/>
        <Route path="/analytics" element={<Analytics />}/>

      </Routes>
      
    </div>
  );
};

export default App;
