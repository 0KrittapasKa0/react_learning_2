import { useContext } from "react";
import DataContext from "../data/DataContext";
import "./ReportComponent.css"; // Import your CSS file

const ReportComponent = ({formatNumber}) => {
  const { income, expense, dispatch } = useContext(DataContext);
  return (
    <div>
      <div className="report-container">
        <h4>ยอดคงเหลือ (บาท)</h4>
        <h1>{formatNumber(income - expense)}</h1>
        <div className="report">
          <p>รายรับ {formatNumber(income)}</p>
          <p>รายจ่าย {formatNumber(expense)}</p>
        </div>
      </div>
    </div>
  );
};

const ButtonControlComponent = () => {
  const { dispatch } = useContext(DataContext);
  return (
    <div>
      <div className="button-container">
        <button className="show" onClick={() => dispatch({ type: "Show" })}>
          แสดง
        </button>
        <button className="hide" onClick={() => dispatch({ type: "Hide" })}>
          ซ่อน
        </button>
      </div>
    </div>
  );
};

// Export คอมโพเนนต์แยกกัน
export { ReportComponent, ButtonControlComponent };
