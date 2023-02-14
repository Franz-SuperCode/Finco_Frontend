import Card from "../../assets/img/Card.svg";
import Button from "../../components/button/Button.jsx";
import "./Expense.css";

function Expense() {

    return (
        <main className="expense">
            <h1>Add Expense</h1>
            <img className="cardImg" src={Card} />
            <form>
                <input type="number" placeholder="€" />
                <select name="category">
                    <option value="food">Food</option>
                    <option value="other">Other</option>
                </select>
                <label for="transDate">Date:</label>
                <input type="date" id="transDate" name="transDate"
                    min="2000-01-01"
                    value="2023-01-01">
                </input>
                <label for="time">Time:</label>
                <input type="time" name="time" id="time" value="12:00"></input>
                <input type="submit" value="Add Expense" id="expenseButton"></input>

            </form>

        </main>
    )
}

export default Expense;