import "./InEx.css";
import Income from "../../assets/img/Income.svg"
import Expense from "../../assets/img/Expense.svg"



const InEx = () => {
    return (
        <div className="InEx">
            <section>
                <div>
                    <img src={Income} />
                    <p>Income</p>
                    <p>$ 0</p>
                </div>
                <div>
                    <img src={Expense} />
                    <p>Expense</p>
                    <p>$ 0</p>
                </div>
            </section>


        </div>
    );
}

export default InEx;