import React, { useContext, useState } from 'react'
import {Landmark,TrendingUp,TrendingDown} from 'lucide-react'
import { ExpencesDataContext } from '../context/ExpenseContext';
const SummaryCards = () => {
    const {transaction} = useContext(ExpencesDataContext);
    let income=0;
    transaction.forEach(e => {
        if(e.type == 'income'){
            income+=Number(e.amount);
        }
    });
    let expence=0;
    transaction.forEach(e=>{
        if(e.type == 'expense'){
            expence+=Number(e.amount);
        }
    });
    let balance=Number(income-expence); 
  return (

      <div className='flex justify-between h-45 w-full  gap-20'>
        <div className='w-1/4 flex flex-col justify-center items-center gap-3 rounded-2xl bg-white/5'>
            <p className='font-bold text-3xl flex justify-center items-center gap-3'><Landmark />Total Balance</p>
            <span className={`text-3xl ${balance >= 0 ? 'text-green-400' : 'text-red-400'}`}>₹{balance.toLocaleString("en-IN")}</span>
        </div>
        <div className='w-1/4 flex flex-col justify-center items-center gap-3 rounded-2xl bg-white/5 '>
            <p className='font-bold text-3xl flex justify-center items-center gap-3'>Income</p>
            <span className={`text-3xl ${income >= 0 ? 'text-green-400' : 'text-red-400'}`}>₹{income.toLocaleString("en-IN")}</span>
        </div>
        <div className='w-1/4 flex flex-col justify-center items-center gap-3 rounded-2xl bg-white/5'>
            <p className='font-bold text-3xl flex justify-center items-center gap-3'>Expenses</p>
            <span className={`text-3xl ${expence >= 0 ? 'text-red-400' : ''}`}>₹{expence.toLocaleString("en-IN")}</span>
        </div>
      </div>
  )
}

export default SummaryCards
