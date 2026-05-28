import React, { useContext } from 'react'
import { ExpencesDataContext } from '../context/ExpenseContext';
import colors from 'tailwindcss/colors';
import {Shirt, Apple, Book, BanknoteArrowDown, Motorbike, ScanHeart, Balloon} from 'lucide-react';

const SavingRate = () => {
    const {transaction} = useContext(ExpencesDataContext);
    
    let income=0;
    transaction.forEach((t)=>{
        if(t.type =='income') income+=Number(t.amount);
    });

    let expense=0;
    transaction.forEach((t)=>{
        if(t.type =='expense') expense+=Number(t.amount);
    })

    const savingRate= Math.round((income-expense)/income*100);
    const avgDaily = Math.round(expense/30);
    const totalTransaction= (transaction.length);

    let shopping=0,food=0,education=0,bills=0,transport=0,health=0,fun=0,other=0;
    transaction.forEach(t=>{
      if(t.type !== 'expense') return
      if(t.category == 'Shopping') shopping+=Number(t.amount);
      if(t.category == 'Food') food+=Number(t.amount);
      if(t.category == 'Education') education+=Number(t.amount);
      if(t.category == 'Bills') bills+=Number(t.amount);
      if(t.category == 'Transport') transport+=Number(t.amount);
      if(t.category == 'Health') health+=Number(t.amount);
      if(t.category == 'Fun') fun+=Number(t.amount);
      if(t.category == 'Other') other+=Number(t.amount);
    })

    const categories=[
      {icon:<Shirt size={16}/>, name:"Shopping", amount:shopping, color: "bg-purple-500"},
      {icon:<Apple size={16} /> ,name:"Food", amount:food, color:"bg-red-500"},
      {icon:<Book size={16} /> ,name:"Education", amount:education, color:"bg-blue-500"},
      {icon:<BanknoteArrowDown size={16} />, name:"Bills", amount:bills, color:"bg-yellow-500"},
      {icon:<Motorbike size={16} />, name:"Transport", amount:transport, color:"bg-green-500"},
      {icon:<ScanHeart size={16} />, name:"Health", amount:health, color:"bg-teal-500"},
      {icon: <Balloon size={16} />, name:"Fun", amount:fun, color:"bg-orange-500"},
      {name:"Other", amount:other, color:"bg-white"},

    ]
  return (
    <div className="w-full flex flex-col gap-5 h-[75vh]">
      <div className="w-full flex justify-between h-[30%] mt-5">
        <div className="w-1/4 flex flex-col justify-center items-center gap-3 rounded-2xl bg-white/5 border-2 border-white/10">
            <h1 className="font-semibold text-xl">Saving Rate %</h1>
            <span className="text-[#639922] text-3xl font-bold">{savingRate}%</span>
            <h1 className="font-semibold text-xl">of income saved</h1>
        </div>
        <div className="w-1/4 flex flex-col justify-center items-center gap-3 rounded-2xl bg-white/5 border-2 border-white/10">
            <h1 className="font-semibold text-xl">Avg Daily Spend</h1>
            <span className="text-[#554C96] text-3xl font-bold">₹{avgDaily}</span>
            <h1 className="font-semibold text-xl">this month</h1>
        </div>
        <div className="w-1/4 flex flex-col justify-center items-center gap-3 rounded-2xl bg-white/5 border-2 border-white/10">
            <h1 className="font-semibold text-xl">Transactions</h1>
            <span className="text-[#30558C] text-3xl font-bold">{totalTransaction}</span>
            <h1 className="font-semibold text-xl">total entries</h1>
        </div>
      </div>

      <div className="bg-white/5 rounded-2xl p-5 mt-10">
            <h1 className="text-3xl font-bold underline">Category Breakdown</h1>
            <div className="flex flex-col gap-5 mt-5">
              {categories.map((e,idx)=>(
                <div key={idx}>
                  <div className="flex justify-between gap-10 mb-2">
                    <span className="text-xl flex gap-2 items-center">{e.icon} {e.name}</span>
                    <span className="text-xl font-semibold">
                      ₹{e.amount.toLocaleString("en-IN")}
                      <span className="ml-2 text-white/40">
                        ({expense > 0 ? Math.round((e.amount/expense)*100): 0}%)
                      </span>
                    </span>
                  </div>

                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full ${e.color} rounded-full transition-all duration-300`}
                    style={{width: `${expense > 0 ? Math.round((e.amount/expense)*100): 0}%`}}>
                    </div>
                  </div>

                </div>
              ))}
            </div>
      </div>
    </div>
  )
}

export default SavingRate
