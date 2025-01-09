import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Items from "./Items";
import "./App.css";
import FormCoponent from "./Form";
import DataContext from "../data/DataContext";

function App() {
  const initdata = [];
  const [items, setItems] = useState(initdata);
  const onAddNewItem = (newItem) => {
    console.log("ข้อมูลที่ได้รับมา ", newItem);
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  return (
    <DataContext.Provider value={"Krittapas"}>
      <div>
        <Header />
        <FormCoponent onAddItem={onAddNewItem} />
        <Transaction items={items} />
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
        <DataContext.Consumer>
        {value=><p>{value}</p>}
      </DataContext.Consumer>
    </div>
  );
};

export default App;
