import React, { act, useContext, useState } from "react";
import { ExpencesDataContext } from "../context/ExpenseContext";

const AddModel = (props) => {
  const { addTransaction } = useContext(ExpencesDataContext);

  const [active, setActive] = useState("");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  // console.log(category);
  const today = new Date().toISOString().split("T")[0];
    
  const submitHandler = () => {
    if (!amount | !desc | !category | !date | !active) {
      alert("Filled Everything Properly");
      return;
    }

    const newItem = {
      type: active,
      amount: parseFloat(amount),
      category: category,
      desc: desc,
      date: date,
    };

    addTransaction(newItem);
    props.onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-slate-800 rounded-2xl p-6 w-1/2">
        <h2 className="text-xl font-bold mb-4">Add Transaction</h2>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between gap-2">
            <button
              onClick={() => {
                setActive("expense");
              }}
              className={`border px-5 py-2 rounded-xl w-1/2 font-semibold text-xl ${active == "expense" ? "bg-red-500 border-red-500" : ""}`}
            >
              Expense
            </button>
            <button
              onClick={() => {
                setActive("income");
              }}
              className={`border px-5 py-2 rounded-xl w-1/2 font-semibold text-xl ${active == "income" ? "bg-green-600 border-green-600" : ""}`}
            >
              Income
            </button>
          </div>

          <div className="">
            <label htmlFor="">Amount:</label>
            <br />
            <input
              type="text"
              placeholder="Enter Amount...."
              className="w-full border-white/15 border-2 p-2"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>

          <div className="">
            <label htmlFor="" className="">
              Description:
            </label>
            <br />
            <textarea
              name=""
              id=""
              placeholder="What was this for?"
              className="w-full border-white/15 border-2 p-2"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="flex justify-between w-full gap-5">
            <div className="w-1/3 ">
              <label htmlFor="">Category:</label>
              <br />
              <select
                name=""
                id=""
                className="w-full border-white/15 border-2 p-2 mt-2 bg-slate-600 rounded-xl"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select Category...
                </option>
                <option value="Food">Food</option>
                <option value="Shopping">Shopping</option>
                <option value="Education">Education</option>
                <option value="Bills">Bills</option>
                <option value="Transport">Transport</option>
                <option value="Health">Health</option>
                <option value="Fun">Fun</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="w-1/2">
              <label htmlFor="">Date:</label>
              <br />
              <input
                type="date"
                name=""
                id=""
                className="w-full border-white/15 border-2 p-2 mt-2"
                max={today}
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-10 mt-5">
            <button
              onClick={props.onClose}
              className="border px-5 py-2 rounded-xl"
            >
              Cancel
            </button>
            <button
              onClick={submitHandler}
              className="border px-5 py-2 rounded-xl"
            >
              Add Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModel;
