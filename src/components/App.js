import { useContext, useEffect, useState, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import Items from "./Items";
import "./App.css";
import FormCoponent from "./Form";
import DataContext from "../data/DataContext";
import { ReportComponent, ButtonControlComponent } from './ReportComponent';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const initdata = [];
  const [items, setItems] = useState(initdata);
  const [ReportIncome, setReportIncome] = useState(0);
  const [ReportExpense, setResportExpense] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((prevItems) => [newItem, ...prevItems]);
  };

  useEffect(() => {
    const amounts = items.map((item) => item.amount);
    const income = amounts
      .filter((value) => value > 0)
      .reduce((total, value) => total + value, 0);
    const expense =
      amounts
        .filter((value) => value < 0)
        .reduce((total, value) => total + value, 0) * -1;

    setReportIncome(income);
    setResportExpense(expense);
  }, [items]);

  const [showReport, setShowReport] = useState(false);

  const reducer = (state, action) => {
    switch (action.type) {
      case "Show":
        setShowReport(true);
        return true;
      case "Hide":
        setShowReport(false);
        return false;
      default:
        return state;
    }
  };

  const [result, dispatch] = useReducer(reducer, showReport);

  return (
    <DataContext.Provider
      value={{
        income: ReportIncome,
        expense: ReportExpense,
        dispatch: dispatch,
      }}
    >
      <div>
        <Header />
        <Router>
          <nav>
            <ul className="menu">
              <li className="menu-item">
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li className="menu-item">
                <Link to="/add">บันทึกข้อมูล</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {showReport && <ReportComponent />}
                  <ButtonControlComponent />
                </>
              }
            />
            <Route
              path="/add"
              element={
                <>
                  <FormCoponent onAddItem={onAddNewItem} />
                  <Transaction items={items} />
                </>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

const Header = () => {
  return <h1>โปรแกรม รายรับ - รายจ่าย OH mY PC</h1>;
};

const Transaction = ({ items }) => {
  return (
    <div>
      <ul className="transaction-list">
        {items.map((item) => (
          <li className="transaction-list-item" key={uuidv4()}>
            <Items {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
