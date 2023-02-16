import "./InEx.css";
import Income from "../../assets/img/Income.svg";
import Expense from "../../assets/img/Expense.svg";
import { useEffect, useState } from "react";

const InEx = () => {
    const [data, setData] = useState([]);
    const [summeIncome, setSummeIncome] = useState(0);
    const [summeExpense, setSummeExpense] = useState(0);

    useEffect(() => {
        async function getData() {
            const response = await fetch(
                "https://fincobackend-fincobackend.up.railway.app/api/transaction"
            );
            const jsonData = await response.json();
            setData(jsonData);
        }
        getData();
    }, []);

    useEffect(() => {
        // Hilfsfunktion, die die transValue aller Objekte addiert
        const sumTransValue = (data) => {
            return data.reduce((sum, obj) => {
                const transValue = Number(obj.transValue);
                return Number.isNaN(transValue) ? sum : sum + transValue;
            }, 0);
        }


        // Summe von Income berechnen
        const incomeSum = sumTransValue(data.filter((item) => item.transType == 1));
        setSummeIncome(incomeSum);

        // Summe von Expense berechnen
        const expenseSum = sumTransValue(data.filter((item) => item.transType == 2));
        setSummeExpense(expenseSum);
    }, [data]);

    console.log("Income:", summeIncome);
    console.log("Expense:", summeExpense);

    return (
        <div className="InEx">
            <section>
                <div>
                    <img src={Income} />
                    <p>Income</p>
                    <h3>+ {summeIncome} €</h3>
                </div>
                <div>
                    <img src={Expense} />
                    <p>Expense</p>
                    <h3>- {summeExpense} €</h3>
                </div>
            </section>
        </div>
    );
};

export default InEx;
