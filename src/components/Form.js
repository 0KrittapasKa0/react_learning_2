import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Form.css";
const FormCoponent = (props) => {
  console.log("Test");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("0");
  const [formValid, setFormValid] = useState(false);

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };
  const inputAmount = (event) => {
    setAmount(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault();
    // console.log("บันทึกข้อมูลเรียบร้อย");
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(amount),
    };
    props.onAddItem(itemData);
    setTitle("");
    setAmount("0");
  };
  useEffect(() => {
    const checkData =
      title.trim().length > 0 &&
      title != null &&
      title !== "" &&
      amount != null &&
      amount !== "" &&
      !isNaN(amount);
    if (checkData) {
      setFormValid(true);
    }
  }, [title, amount]);
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
            value={title}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">จำนวนเงิน</label>
          <input
            type="number"
            id="amount"
            placeholder="ระบุจำนวนเงิน"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div>
          <button type="submit" disabled={!formValid}>
            เพิ่มรายการ
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCoponent;
