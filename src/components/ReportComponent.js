import { useContext } from "react";
import DataContext from "../data/DataContext";
const ReportComponent = () => {
    const {income,expense} = useContext(DataContext);
  return (
    <div>
      <DataContext.Consumer>
        {(data) => <p>รายรับ {data.income} รายจ่าย {data.expense}</p>}
      </DataContext.Consumer>
      <p>แบบ useContext รายรับ {income} รายจ่าย {expense}</p>
    </div>
  );
};
export default ReportComponent;
