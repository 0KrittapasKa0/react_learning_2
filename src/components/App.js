import { useContext, useEffect, useState, useReducer, act } from "react";
import { v4 as uuidv4 } from "uuid";
import Items from "./Items";
import "./App.css";
import FormCoponent from "./Form";
import DataContext from "../data/DataContext";
import ReportComponent from "./ReportComponent";
import { element } from "prop-types";

function App() {
  const initdata = [];
  const [items, setItems] = useState(initdata);
  const [ReportIncome, setReportIncome] = useState(0);
  const [ReportExpense, setResportExpense] = useState(0);
  const onAddNewItem = (newItem) => {
    console.log("ข้อมูลที่ได้รับมา ", newItem);
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((totol, element) => (totol += element), 0);
    const expense =
      amounts
        .filter((element) => element < 0)
        .reduce((totol, element) => (totol -= element), 0) * -1;
    setReportIncome(income);
    setResportExpense(expense);
  }, [items, ReportIncome, ReportExpense]);
  const [count, setCount] = useState(0);
  const reducer = (state, action) => {
    switch (action.type) {
      case "Add":
        return state + action.payload;
      case "Subtract":
        return state - action.payload;
      case "Clear":
        return 0;
      default:
        return null;
    }
  };
  const [result, dispatch] = useReducer(reducer, count);
  return (
    <DataContext.Provider
      value={{
        income: ReportIncome,
        expense: ReportExpense,
      }}
    >
      <div>
        <Header />
        <ReportComponent />
        <FormCoponent onAddItem={onAddNewItem} />
        <Transaction items={items} />
        <h1>Hello React Count : {result}</h1>
        <button onClick={() => dispatch({ type: "Add", payload: 10 })}>
          เพิ่ม
        </button>{" "}
        <button onClick={() => dispatch({ type: "Subtract", payload: 5 })}>
          ลด
        </button>{" "}
        <button onClick={() => dispatch({ type: "Clear" })}>ล้าง</button>
      </div>
    </DataContext.Provider>
  );
}

let Header = () => {
  return (
    <h1 style={{ color: "blue", fontSize: "30px" }}>
      โปรแกรม รายรับ - รายจ่าย OH mY PC
    </h1>
  );
};

let Transaction = (props) => {
  const { items } = props;
  return (
    <div>
      <ul className="style-none">
        {items.map((item) => {
          return <Items key={uuidv4()} {...item} />; //items spread operator
        })}
      </ul>
    </div>
  );
};

export default App;
