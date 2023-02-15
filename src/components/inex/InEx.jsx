import "./InEx.css";
import Income from "../../assets/img/Income.svg"
import Expense from "../../assets/img/Expense.svg"
import { useEffect, useState } from "react";



const InEx = () => {

    const [data, setData] = useState([]);
    const [summeIncome, setSummeIncome] = useState(0);
    const [summeExpense, setSummeExpense] = useState(0);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://fincobackend-fincobackend.up.railway.app/api/transaction");
            const jsonData = await response.json();
            setData(jsonData);
        }
        getData();
    }, []);

    // Filtern Sie die Daten nach `transType` 1 und 2
    const dataWithType1 = data.filter((datum) => datum.transType == 1);
    const dataWithType2 = data.filter((datum) => datum.transType == 2);
    console.log(dataWithType1);

    //Darüber mappen und alle values addieren
    useEffect(() => {
        dataWithType1.map((object) => {
            let aNumber = Number(object.transValue);
            setSummeIncome(summeIncome + aNumber);
            console.log(aNumber);
        })

        dataWithType2.map((object) => {
            let aNumber = Number(object.transValue);
            setSummeExpense(summeExpense + aNumber);
            console.log(aNumber);
        })
    }, [data])


    console.log("Income:", summeIncome);
    console.log("Expense:", summeExpense);


    return (
        <div className="InEx">
            <section>
                <div>
                    <img src={Income} />
                    <p>Income</p>
                    <p>+ {summeIncome} €</p>
                </div>
                <div>
                    <img src={Expense} />
                    <p>Expense</p>
                    <p>- {summeExpense} €</p>
                </div>
            </section>


        </div>
    );
}

export default InEx;