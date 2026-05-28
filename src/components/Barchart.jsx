import { useContext } from "react";
import { ExpencesDataContext } from "../context/ExpenseContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
} from "recharts";

const Barchart = () => {
  const data = useContext(ExpencesDataContext);

  let shopping = 0,
    food = 0,
    education = 0,
    bills = 0;
  let transport = 0,
    health = 0,
    fun = 0,
    other=0;
  data.transaction.forEach((t) => {
    if (t.type !== "expense") return;

    if (t.category === "Shopping") shopping += Number(t.amount);
    if (t.category === "Food") food += Number(t.amount);
    if (t.category === "Education") education += Number(t.amount);
    if (t.category === "Bills") bills += Number(t.amount);
    if (t.category === "Transport") transport += Number(t.amount);
    if (t.category === "Health") health += Number(t.amount);
    if (t.category === "Fun") fun += Number(t.amount);
    if (t.category === "Other") other+=Number(t.amount); 
  });

  const donutChart = [
    { name: "Shopping", value: shopping, fill: "#7F77DD" },
    { name: "Food", value: food, fill: "#E24B4A" },
    { name: "Education", value: education, fill: "#378ADD" },
    { name: "Bills", value: bills, fill: "#EF9F27" },
    { name: "Transport", value: transport, fill: "#639922" },
    { name: "Health", value: health, fill: "#1D9E75" },
    { name: "Fun", value: fun, fill: "#E67E22" },
    { name: "Other", value:other,fill: "#E5E5E5"}
  ];

  let jan = 0,
    feb = 0,
    mar = 0,
    apr = 0,
    may = 0,
    jun = 0;
  let jul = 0,
    aug = 0,
    sep = 0,
    oct = 0,
    nov = 0,
    dec = 0;

  const currentYear = new Date().getFullYear();
  data.transaction.forEach((t) => {
    if (t.type !== "expense") return;
    const month = new Date(t.date).getMonth();
    const year = new Date(t.date).getFullYear();

    if (month === 0 && year === currentYear) jan += t.amount;
    if (month === 1 && year === currentYear) feb += t.amount;
    if (month === 2 && year === currentYear) mar += t.amount;
    if (month === 3 && year === currentYear) apr += t.amount;
    if (month === 4 && year === currentYear) may += t.amount;
    if (month === 5 && year === currentYear) jun += t.amount;
    if (month === 6 && year === currentYear) jul += t.amount;
    if (month === 7 && year === currentYear) aug += t.amount;
    if (month === 8 && year === currentYear) sep += t.amount;
    if (month === 9 && year === currentYear) oct += t.amount;
    if (month === 10 && year === currentYear) nov += t.amount;
    if (month === 11 && year === currentYear) dec += t.amount;
  });

  const chartData = [
    { month: "Jan", amount: jan },
    { month: "Feb", amount: feb },
    { month: "Mar", amount: mar },
    { month: "Apr", amount: apr },
    { month: "May", amount: may },
    { month: "Jun", amount: jun },
    { month: "Jul", amount: jul },
    { month: "Aug", amount: aug },
    { month: "Sep", amount: sep },
    { month: "Oct", amount: oct },
    { month: "Nov", amount: nov },
    { month: "Dec", amount: dec },
  ];

  return (
    <div className="mt-5 flex gap-30 w-full h-80 justify-evenly ">
      <div className="w-1/3 bg-white/5 p-4 rounded-2xl overflow-hidden flex justify-between">
        <div className="">
          <h1>Spending by Category</h1>
          <div className="mt-6">
            {donutChart.map((item, index) => (
            <div key={index} className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: item.fill }}
                ></div>
                <span className="text-sm text-white/70">{item.name}</span>
              </div>
              <span className="text-sm font-semibold">
                ₹{item.value.toLocaleString("en-IN")}
              </span>
            </div>
          ))}   
          </div>
        </div>
        <div className="w-1/2 mt-6">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={donutChart}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                dataKey="value"
                shape={(props) => {
                  const {
                    cx,
                    cy,
                    innerRadius,
                    outerRadius,
                    startAngle,
                    endAngle,
                    payload,
                  } = props;
                  return (
                    <Sector
                      cx={cx}
                      cy={cy}
                      innerRadius={innerRadius}
                      outerRadius={outerRadius}
                      startAngle={startAngle}
                      endAngle={endAngle}
                      fill={payload.fill} 
                    />
                  );
                }}
              />
              <Tooltip
                formatter={(value) => [
                  `₹${value.toLocaleString("en-IN")}`,
                  "Spent",
                ]}
                contentStyle={{
                  background: "#1e1e1e",
                  border: "none",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#fff", fontWeight: "bold" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="w-1/3 bg-white/5 p-4 rounded-2xl flex flex-col gap-15">
        <div>
          <h1>Monthly Expenses</h1>
          <span>{currentYear}</span>
        </div>
        <div className="overflow-hidden">
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={chartData}>
              <XAxis dataKey="month" tick={{ fill: "#aaa", fontSize: 12 }} />
              <YAxis tick={{ fill: "#aaa", fontSize: 12 }} />
              <Tooltip
                labelFormatter={(label) => `${label} ${currentYear}`}
                formatter={(value) => [
                  `₹${value.toLocaleString("en-IN")}`,
                  "Spent",
                ]}
                contentStyle={{
                  background: "#1e1e1e",
                  border: "none",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#fff", fontWeight: "bold" }}
              />
              <Bar dataKey="amount" fill="#639922" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Barchart;
