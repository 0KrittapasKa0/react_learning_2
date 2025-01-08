import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Form.css";

const FormComponent = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [formValid, setFormValid] = useState(false);

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };

  const inputAmount = (event) => {
    setAmount(event.target.value);
  };

  const saveItem = (event) => {
    event.preventDefault();

    if (!formValid) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    const itemData = {
      id: uuidv4(),
      title: title.trim(),
      amount: Number(amount),
    };

    props.onAddItem(itemData);
    setTitle("");
    setAmount("");
  };

  useEffect(() => {
    const checkData =
      title.trim().length > 0 && 
      amount.trim().length > 0 && 
      !isNaN(amount);
    setFormValid(checkData);
  }, [title, amount]);

  return (
    <div className="main">
      <form className="mainForm" onSubmit={saveItem}>
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

export default FormComponent;
