import { useContext } from "react";
import DataContext from "../data/DataContext";
import './ReportComponent.css'; // Import your CSS file

const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);

  return (
    <div className="report-container">
      <h4>ยอดคงเหลือ (บาท)</h4>
      <h1>{income - expense}</h1>
      <div className="report">
        <p>รายรับ {income}</p>
        <p>รายจ่าย {expense}</p>
      </div>
    </div>
  );
};

export default ReportComponent;
