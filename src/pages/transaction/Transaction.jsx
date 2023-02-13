import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import InEx from "../../components/inex/InEx.jsx";
import Navigation from "../../components/navigation/Navigation";
import "./Transaction.css"
import fakeData from "../../fakeData.json"

// [
//     {
//         "name": "Luis",
//         "birthday": "1992-02-02"
//     },
//     {
//         "transID": 0,
//         "transCategory": "Food & Drink",
//         "transDate": "2022-12-02",
//         "transTime": "16:00",
//         "transValue": 6.25
//     },
//     {
//         "transID": 1,
//         "transCategory": "Other Income",
//         "transDate": "2022-12-03",
//         "transTime": "18:50",
//         "transValue": 95.55
//     }
// ]


function Transaction() {


    const [newData, setNewData] = useState();
    useEffect(() => {
        async function getData() {
            const data = await fetch(`http://localhost:9999/api/transaction`);
            const dataJS = await data.json();
            setNewData(dataJS)
            console.log("dataJS:", dataJS);
        }
        getData();
    }, [])


    console.log(newData);
    return (
        <main>
            Transaction SEITE
            <Article
                title="All transaction" />
            <InEx />


            {newData?.map((item, index) => {
                return (
                    <section className="transaction" key={index}>
                        <img src={`https://unsplash.it/40/40?${index}`} />
                        <div>
                            <p>{item.category}</p>
                            <p>{item.time}</p>
                        </div>
                        <p key={index}>{item.money}</p>
                    </section>
                )
            })}



            <Navigation />
        </main>
    )
}

export default Transaction;