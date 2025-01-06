import "./Form.css"
const FormCoponent = () => {
  return (
    <div className="main"> {/* ใช้ div className="main" สำหรับควบคุมการจัดตำแหน่ง */}
      <form className="mainForm"> {/* ใช้ className="mainForm" สำหรับฟอร์ม */}
        <div className="form-control">
          <label htmlFor="itemName">ชื่อรายการ</label>
          <input type="text" id="itemName" placeholder="ระบุชื่อรายการ" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">จำนวนเงิน</label>
          <input type="number" id="amount" placeholder="ระบุจำนวนเงิน" />
        </div>
        <div>
          <button type="submit">เพิ่มรายการ</button>
        </div>
      </form>
    </div>

  );
};

export default FormCoponent;
