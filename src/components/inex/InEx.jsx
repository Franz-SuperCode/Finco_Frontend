import "./InEx.css";
import Income from "../../assets/img/Income.svg"
import Expense from "../../assets/img/Expense.svg"
import Spending from "../../assets/img/Spending.svg"


const InEx = () => {
    return (
        <div className="InEx">
            <section>
                <div>
                    <img src={Income} />
                    <p>Income</p>
                </div>
                <div>
                    <img src={Expense} />
                    <p>Expense</p>
                </div>
            </section>

            <div>
                <img src={Spending} />
                <p>Monthly spending limit</p>
                <p>$ 6000</p>
            </div>
        </div>
    );
}

export default InEx;