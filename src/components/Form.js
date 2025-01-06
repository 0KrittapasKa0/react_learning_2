import { useState } from "react";
import "./Form.css";
const FormCoponent = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("0");
  const inputTitle = (event) => {
    console.log(event.target.value);
  };
  const inputAmount = (event) => {
    console.log(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault();
    console.log("บันทึกข้อมูลเรียบร้อย");
  };
  return (
    <div className="main">
      {" "}
      {/* ใช้ div className="main" สำหรับควบคุมการจัดตำแหน่ง */}
      <form className="mainForm" onSubmit={saveItem}>
        {" "}
        {/* ใช้ className="mainForm" สำหรับฟอร์ม */}
        <div className="form-control">
          <label htmlFor="itemName">ชื่อรายการ</label>
          <input
            type="text"
            id="itemName"
            placeholder="ระบุชื่อรายการ"
            onChange={inputTitle}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">จำนวนเงิน</label>
          <input
            type="number"
            id="amount"
            placeholder="ระบุจำนวนเงิน"
            onChange={inputAmount}
          />
        </div>
        <div>
          <button type="submit">เพิ่มรายการ</button>
        </div>
      </form>
    </div>
  );
};

export default FormCoponent;
