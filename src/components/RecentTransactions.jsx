import React, { useContext } from "react";
import { ExpencesDataContext } from "../context/ExpenseContext";

const RecentTransactions = () => {
  const { transaction } = useContext(ExpencesDataContext);
  return (
    <div className="border-2 border-white/10 h-60 mt-5 rounded-2xl flex flex-col gap-10">
      <h2 className="text-4xl font-bold">Recent Transactions</h2>
      <div>
        {
            transaction.sort((a,b)=> new Date(b.date)- new Date(a.date)).slice(0,3).map((t,idx)=>(
                <div key={idx} className="flex justify-between items-center p-3 border-b border-white/10">
                    <span className="w-1/3 font-semibold">{t.desc}</span>
                    <span className="w-1/4 text-center font-semibold">{t.category}</span>
                    <span className="w-1/4 text-center font-semibold">{t.date}</span>
                    <span className={`w-1/4 text-right font-semibold ${t.type == 'income' ? 'text-green-400' : 'text-red-400'}`}>{t.type==='income' ? '+' : '-'}₹{t.amount.toLocaleString("en-IN")}</span>
                </div>
            ))
        }
    </div>
    </div>
  );
};

export default RecentTransactions;
