import { useEffect, useState } from "react";
import Card from "../../assets/img/Card.svg";
import "./Add.css";
import backIcon from "../../assets/img/backIcon.svg"
import { useNavigate } from "react-router-dom";



function Add() {
    const [checked, setChecked] = useState(true);
    const nav = useNavigate();
    const [userData, setUserData] = useState(null)


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
        const baseUrl = process.env.REACT_APP_BACKEND_URL;
        const endpoint = `/transaction`
        try {
            const response = await fetch(baseUrl + endpoint, {
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




    return (
        <main className="add">
            <div>
                <img className="backbutton" alt="backbutton" onClick={() => nav(-1)} src={backIcon} />
                {/* <img className="profilePic" src="https://unsplash.it/50/50?1" /> */}
            </div>

            <h1>Add Transaction</h1>
            <img className="cardImg" src={Card} />


            {/* Beim verändern vom Datum, wird jedesmal handleChange ausgeführt */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="transDate">Date</label>
                <input
                    type="date"
                    name="transDate"
                    id="transDate"
                    value={formData.transDate}
                    onChange={handleChange}
                />
                <label htmlFor="transTime">Time</label>
                <input
                    type="time"
                    name="transTime"
                    id="transTime"
                    value={formData.transTime}
                    onChange={handleChange}
                />
                <label htmlFor="transValue">Amount [€]</label>
                <input
                    type="number"
                    name="transValue"
                    id="transValue"
                    placeholder="Value in €"
                    value={formData.transValue}
                    onChange={handleChange}
                />
                <label htmlFor="transCategory">Category</label>
                <input
                    type="text"
                    name="transCategory"
                    id="transCategory"
                    placeholder="Category"
                    value={formData.transCategory}
                    onChange={handleChange}
                />
                <select onChange={handleChange} name="transType" defaultValue="">
                    <option disabled value=""> Select Type </option>
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


