import { useContext } from "react";
import DataContext from "../data/DataContext";
const ReportComponent= () =>{
    const data = useContext(DataContext)
    const name = data.name
        return(
            <div>
                <h1>Hello {name}</h1>
            </div>
        )
}
export default ReportComponent;