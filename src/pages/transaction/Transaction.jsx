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


    // const [newData, setNewData] = useState();
    // useEffect(() => {
    //     async function getData() {
    //         const data = await fetch(fakeData);
    //         const dataJS = await data.json();
    //         setNewData(dataJS)
    //         console.log("dataJS:", dataJS);
    //     }
    //     getData();
    // }, [])


    console.log(fakeData);
    return (
        <main>
            Transaction SEITE
            <Article
                title="All transaction" />
            <InEx />






            <Navigation />
        </main>
    )
}

export default Transaction;