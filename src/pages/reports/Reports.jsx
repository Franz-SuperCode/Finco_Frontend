import { useEffect, useState } from "react";
import MyChart from "../../components/chart/MyChart.js";
import Navigation from "../../components/navigation/Navigation";
import "./Reports.css";
import home from "../../assets/img/logo.svg"
import Article from "../../components/article/Article.jsx";

function Reports() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const baseUrl = process.env.REACT_APP_BACKEND_URL2;
            const endpoint = '/transaction'
            const data = await fetch(baseUrl + endpoint);
            const dataJS = await data.json();
            setData(dataJS);
        }
        getData();
    }, []);

    // Filtern Sie die Daten nach `transType` 1 und 2
    const dataWithType1 = data.filter((item) => item.transType == 1);
    const dataWithType2 = data.filter((item) => item.transType == 2);


    // Berechnen Sie die Differenz zwischen `transType` 1 und 2
    const dataDiff = dataWithType1.map((item, index) => ({
        transDate: item.transDate,
        transValue: parseFloat(item?.transValue) - parseFloat(dataWithType2[index]?.transValue)
    }));

    return (
        <main className="reports">
            <Article
                title="Reports" />
            <div className="chartContainer">
                <h2>Income Data</h2>
                <MyChart data={dataWithType1} color="green" type="1" />
            </div>
            <div className="chartContainer">
                <h2>Expense Data</h2>
                <MyChart data={dataWithType2} color="red" type="2" />
            </div>
            <div className="chartContainer">
                <h2>Difference Data</h2>
                <MyChart data={dataDiff} color="purple" type="3" />
            </div>


            {/* {data?.map((item, index) => {
                return (
                    <section className="transaction" key={index}>
                        Wenn es das erste Element im Array ist oder das aktuelle Datum ungleich dem vorherigen, wird ein <h1> mit dem Datum erzeugt
                        {index === 0 || item.transDate !== data[index - 1]?.transDate ? <h1>{item.transDate}</h1> : null}
                        <article>
                            Ein Bild wird geladen, dessen URL aus einer Zufallszahl erzeugt wird
                            <img src={`https://unsplash.it/40/40?${index}`} />
                            <div>
                                Die Kategorie und die Uhrzeit werden angezeigt
                                <p>{item.transCategory}</p>
                                <p>{item.transTime}</p>
                            </div>
                            Der Transaktionswert wird angezeigt
                            <p key={index}>{item.transValue}</p>
                        </article>
                    </section>
                );
            })} */}

            <Navigation />
        </main>
    );
}

export default Reports;
