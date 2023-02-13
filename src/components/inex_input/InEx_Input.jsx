import { Link } from "react-router-dom";
import "./InEx_Input.css";


const InEx_Input = () => {
    return (
        <div className="InEx_Input">
            {/* Hier könnten die weiteren Buttons hinzugefügt werden */}
            {/* <Link to="/income"> <button className="incomeButton" >Add Income</button> </Link>
            <Link to="/expense"> <button className="expenseButton" >Add Expense</button></Link> */}

            <button className="incomeButton" >Add Income</button>
            <button className="expenseButton" >Add Expense</button>
        </div>
    );
}

export default InEx_Input;