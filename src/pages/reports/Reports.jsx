import { useEffect, useState } from "react";
import MyChart from "../../components/chart/MyChart.js";
import Navigation from "../../components/navigation/Navigation";

function Reports() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://fincobackend-fincobackend.up.railway.app/api/transaction");
            const jsonData = await response.json();
            setData(jsonData);
        }
        getData();
    }, []);

    // Filtern Sie die Daten nach `transType` 1 und 2
    const dataWithType1 = data.filter((item) => item.transType == 1);
    const dataWithType2 = data.filter((item) => item.transType == 2);


    // Berechnen Sie die Differenz zwischen `transType` 1 und 2
    const dataDiff = dataWithType1.map((item, index) => ({
        transDate: item.transDate,
        transValue: parseFloat(item.transValue) - parseFloat(dataWithType2[index].transValue)
    }));

    return (
        <main>
            <h1>Reports</h1>
            <div>
                <h2>Income Data</h2>
                <MyChart data={dataWithType1} color="green" type="1" />
            </div>
            <div>
                <h2>Expense Data</h2>
                <MyChart data={dataWithType2} color="red" type="2" />
            </div>
            <div>
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
