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
    const dataWithType1 = data.filter((datum) => datum.transType == 1);
    const dataWithType2 = data.filter((datum) => datum.transType == 2);

    // Berechnen Sie die Differenz zwischen `transType` 1 und 2
    const dataDiff = dataWithType1.map((datum, index) => ({
        transDate: datum.transDate,
        transValue: parseFloat(datum.transValue) - parseFloat(dataWithType2[index].transValue)
    }));

    return (
        <main>
            <h1>Reports SEITE</h1>
            <Navigation />
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
        </main>
    );
}

export default Reports;
