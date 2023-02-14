import { useState } from "react";
import Card from "../../assets/img/Card.svg";
import "./Add.css";
// import Moment from "react-moment";
// import moment from "moment";

function Add() {
    const [checked, setChecked] = useState(true);

    // const [value, setValue] = useState(moment().format("DD-MM-YYYY"))

    // const onChangeDate = e => {
    //     const newDate = setValue(moment(new Date(e.target.value)).format('YYYY-MM-DD'));
    //     setValue(newDate);
    //     console.log(newDate); //value picked from date picker
    // };


    //Hier werden alle Infos von den Inputfeldern gesammelt bevor sie verschickt werden
    const [formData, setFormData] = useState({
        transDate: "",
        transTime: "",
        transValue: "",
        transCategory: "",
        transType: ""
        // transType: 1 // default: income
    });


    //Bei einem onChange wird diese Funktion ausgeführt.
    //Aus dem Event werden der Name und das Value in formData gespeichert
    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(name, "hat sich geändert")

        setFormData({ ...formData, [name]: value });
    };


    // Hier werden alle Daten aus dem formData ans Backend geschickt beim klick auf den Button
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:9999/api/transaction", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            console.log("Form submission successful:", response);
        } catch (error) {
            console.error("Form submission error:", error);
        }
    };



    // const submit = (event) => {
    //     event.preventDefault();
    //     const form = new FormData(event.target)

    //     fetch(`http://localhost:9999/api/transaction`,
    //         {
    //             method: "POST",
    //             body: form
    //         })
    //         .then((response) => {
    //             if (response.ok) {
    //                 // setUpdatePage(true);
    //             }

    //         })
    // }





    return (
        <main className="add">
            <h1>Add Transaction</h1>
            <img className="cardImg" src={Card} />

            {/* <form onSubmit={submit}>
                <input name="transValue" type="number" placeholder="€" />

                <select name="category">
                    <option name="transCategory" value="food">Food</option>
                    <option name="transCategory" value="other">Other</option>
                    <option name="transCategory" value="test">Test</option>
                </select>

                <label htmlFor="transDate">Date:</label>
                <input type="date" id="transDate" name="transDate"
                    onChange={(e) => onChangeDate(e)}
                    min="2000-01-01"
                    value="2023-01-01">

                </input>

                <label htmlFor="transTime">Time:</label>
                <input type="time" name="transTime" id="time" value="12:00"
                    onChange={(e) => onChangeDate(e)}>
                </input>

                <input type="submit" value="Add Income" id="incomeButton"></input>

            </form> */}



            {/* Beim verändern vom Datum, wird jedesmal handleChange ausgeführt */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="transDate">
                    Date:
                    <input
                        type="date"
                        name="transDate"
                        id="transDate"
                        value={formData.transDate}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="transTime">
                    Time:
                    <input
                        type="time"
                        name="transTime"
                        id="transTime"
                        value={formData.transTime}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="transValue">
                    Amount (Euro):
                    <input
                        type="number"
                        name="transValue"
                        id="transValue"
                        value={formData.transValue}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="transCategory">
                    Category:
                    <input
                        type="text"
                        name="transCategory"
                        id="transCategory"
                        value={formData.transCategory}
                        onChange={handleChange}
                    />
                </label>

                {/* Bei Expense, wird 2 im Event Value stehen. Bei Income eine 1 */}
                <select onChange={handleChange} name="transType">
                    <option name="expense" value="2">Expense</option>
                    <option name="income" value="1">Income</option>
                </select>
                <button type="submit">Submit</button>
            </form>
            {console.log(formData)}
        </main>
    );
}

export default Add;


