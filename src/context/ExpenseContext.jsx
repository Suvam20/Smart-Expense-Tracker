import React, { createContext, useState } from "react";

export const ExpencesDataContext = createContext();



const ExpenseContext = (props) => {
  
  const [transaction,setTransaction]=useState(()=>{
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : 
  []
});

  const addTransaction = (newItem)=>{
    const update=[...transaction,newItem];
    setTransaction(update);
    localStorage.setItem("transactions",JSON.stringify(update))
  }
  return (
      <ExpencesDataContext.Provider value={{transaction,addTransaction}}>
        {props.children}
      </ExpencesDataContext.Provider>
  );
};

export default ExpenseContext;
