import { useContext, useState } from "react";
import { ExpencesDataContext } from "../context/ExpenseContext";

const TransactionList = () => {
  const { transaction } = useContext(ExpencesDataContext);
  const [search, setSearch] = useState("");
  const [date,setDate]= useState('');
  const today=new Date().toISOString().split('T')[0];
  // console.log(search);
  const filtered = transaction.filter(t=>{
    const matchSearch= search == "" || t.desc.toLowerCase().includes(search.toLowerCase()) || t.category.toLowerCase().includes(search.toLowerCase());
    const matchDate = date == "" || t.date == date
    return matchDate && matchSearch;
  })
  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex justify-between ">
        <input
          type="text"
          placeholder="Search Transaction..."
          className="border-2 border-white/15 w-4/5 p-3 rounded-xl"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <input type="date" className="bg-white/10 rounded-xl px-8 py-3 border-2 border-white/10" max={today} value={date} onChange={(e)=>{
            setDate(e.target.value);
        }}/>
        
        <button onClick={()=>{
          setDate('')
        }} className="bg-white/5 px-5 py-3 rounded-2xl font-bold text-md active:scale-95 hover:bg-white/15 border-white/15 border-2">Clear Date</button>

      </div>
      <div className="h-[75vh] w-full rounded-xl border-2 border-white/15 overflow-hidden ">
        <div className="flex justify-between bg-black p-4 border-b border-white">
          <h1 className="w-1/3 font-bold text-xl">DESCRIPTION</h1>
          <h1 className="w-1/3 font-bold text-xl">CATEGORY</h1>
          <h1 className="w-1/3 font-bold text-center text-xl">DATE</h1>
          <h1 className="w-1/3 font-bold text-right text-xl ">AMOUNT</h1>
        </div>

        <div className="h-[70vh] overflow-y-auto">
          <div>
            {filtered
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((e, idx) => (
                <div
                  key={idx}
                  className="flex justify-between p-4 border-b border-white/15"
                >
                  <span className="w-1/3 font-semibold">{e.desc}</span>
                  <span className="w-1/3 font-semibold">{e.category}</span>
                  <span className="w-1/3 font-semibold text-center">
                    {e.date}
                  </span>
                  <span
                    className={`w-1/3 text-right ${e.type == "income" ? "text-green-400" : "text-red-400"}`}
                  >
                    ₹{e.type == "income" ? "+" : "-"}
                    {e.amount.toLocaleString("en-IN")}
                  </span>
                </div>
              ))}
              {
                filtered.length==0 &&(
                  <div className="h-[70vh] flex justify-center items-center text-4xl font-bold">No Transaction Found</div>
                )
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
