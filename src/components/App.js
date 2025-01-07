import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Items from "./Items";
import "./App.css";
import FormCoponent from "./Form";

function App() {
  const initdata = [
    { title: "ค่าเดินทาง", amount: -150 },
    { title: "ค่าอาหารกลางวัน", amount: -350 },
    { title: "เงินเดือน", amount: 25000 },
    // { title: "ค่ากาแฟ", amount: -120 },
    // { title: "ซื้อของใช้", amount: -800 },
    // { title: "ขายของออนไลน์", amount: 1200 },
    // { title: "ค่าน้ำมัน", amount: -500 },
    // { title: "ค่าอาหารเย็น", amount: -600 },
    // { title: "โบนัส", amount: 5000 },
    // { title: "ค่าตั๋วหนัง", amount: -200 },
    // { title: "ค่าหนังสือ", amount: -450 },
    // { title: "เงินปันผล", amount: 1000 },
    // { title: "ค่าทางด่วน", amount: -80 },
    // { title: "ค่าขนม", amount: -250 },
    // { title: "รับงานพิเศษ", amount: 3000 },
    // { title: "ค่าซ่อมรถ", amount: -1000 },
    // { title: "ค่าเสื้อผ้า", amount: -750 },
    // { title: "คืนเงินภาษี", amount: 1500 },
    // { title: "ค่าที่จอดรถ", amount: -50 },
    // { title: "ค่าโทรศัพท์", amount: -300 },
    // { title: "ขายของมือสอง", amount: 800 },
    // { title: "ค่าบีทีเอส", amount: -75 },
    // { title: "ค่าของใช้ในบ้าน", amount: -550 },
    // { title: "เงินรางวัล", amount: 2000 },
    // { title: "ค่าแท็กซี่", amount: -120 },
    // { title: "ค่าอาหาร", amount: -400 },
    // { title: "ดอกเบี้ย", amount: 500 },
    // { title: "ค่าเดินทางไปต่างจังหวัด", amount: -1500 },
    // { title: "ซื้อของฝาก", amount: -600 },
    // { title: "เงินคืนจากประกัน", amount: 2500 },
  ];
  const [items, setItems] = useState(initdata);
  const onAddNewItem = (newItem) => {
    console.log("ข้อมูลที่ได้รับมา ", newItem);
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  return (
    <div>
      <Header />
      <FormCoponent onAddItem={onAddNewItem} />
      <Transaction items={items} />
    </div>
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
        <Items
          key={1}
          title={"ทดสอบ " + items[0].title}
          amount={items[0].amount}
        />
        <Items key={2} title="ค่าเดินทาง" amount="-250" />
        <Items key={3} title="ค่าอาหาร" amount="-700" />
        <Items key={4} title="แฮกนาซ่ารับเงินดิจิตอล" amount="9999999999999" />
        {/* {items.map((item) => {
          return <Items title={item.title} amount={item.amount} />;
        })} */}
        {items.map((item) => {
          return <Items key={uuidv4()} {...item} />; //items spread operator
        })}
      </ul>
    </div>
  );
};

export default App;
