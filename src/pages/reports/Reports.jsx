import { useEffect, useState } from "react";
import MyChart from "../../components/chart/MyChart.js";
import Navigation from "../../components/navigation/Navigation";
import "./Reports.css";
import home from "../../assets/img/logo.svg"
import Article from "../../components/article/Article.jsx";
import { useNavigate } from "react-router-dom";

function Reports() {
    const [data, setData] = useState([]);
    // State-Hook "user" wird initialisiert mit null, weil der Benutzer am Anfang noch nicht eingeloggt ist
    const [userData, setUserData] = useState(null)
    const [profilePicture, setProfilePicture] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        async function getData() {
            const baseUrl = process.env.REACT_APP_BACKEND_URL;
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

    // Summieren Sie die Einkommen und Ausgaben für jedes Datum
    const dataWithType1ByDate = {};
    dataWithType1.forEach((item) => {
        const date = new Date(item.transDate).toLocaleDateString();
        if (!dataWithType1ByDate[date]) {
            dataWithType1ByDate[date] = 0;
        }
        dataWithType1ByDate[date] += parseFloat(item.transValue);
    });

    const dataWithType2ByDate = {};
    dataWithType2.forEach((item) => {
        const date = new Date(item.transDate).toLocaleDateString();
        if (!dataWithType2ByDate[date]) {
            dataWithType2ByDate[date] = 0;
        }
        dataWithType2ByDate[date] += parseFloat(item.transValue);
    });

    // Berechnen Sie die Differenz zwischen Einkommen und Ausgaben
    const dataDiff = Object.entries(dataWithType1ByDate).map(([date, value]) => ({
        transDate: date,
        transValue: value - (dataWithType2ByDate[date] || 0),
        transType: 3,
    }));

    // Entfernen Sie doppelte Datumsangaben und sortieren Sie die Daten nach Datum
    const mergedData = [...dataWithType1, ...dataWithType2, ...dataDiff];
    const sortedData = mergedData
        .sort((a, b) => new Date(a.transDate) - new Date(b.transDate))
        .reduce((acc, curr) => {
            const currDate = new Date(curr.transDate).toLocaleDateString();
            const prevDate = acc.length > 0 ? new Date(acc[acc.length - 1].transDate).toLocaleDateString() : null;

            if (currDate !== prevDate) {
                acc.push(curr);
            } else {
                const lastIndex = acc.length - 1;
                const lastItem = acc[lastIndex];
                acc[lastIndex] = {
                    ...lastItem,
                    transValue: (parseFloat(lastItem.transValue) + parseFloat(curr.transValue)) / 2,
                };
            }

            return acc;
        }, []);

    const sortedDataWithType1 = sortedData.filter((item) => item.transType == 1);
    const sortedDataWithType2 = sortedData.filter((item) => item.transType == 2);
    const sortedDataDiff = sortedData.filter((item) => item.transType == 1 || item.transType == 2);

    useEffect(() => {
        // Funktion, die die Daten des Benutzers vom Backend-Server holt
        const getUserDaten = async () => {
            // URL und Endpunkt des Backend-Servers werden definiert
            const baseUrl = process.env.REACT_APP_BACKEND_URL
            //Route um alle Daten vom User zu bekommen
            const endpoint = '/user'
            // HTTP-Anfrage zum Backend-Server wird ausgeführt
            // HTTP-Anfrage zum Backend-Server wird ausgeführt
            const data = await fetch(baseUrl + endpoint, {
                credentials: 'include'
            })
            // Wenn kein Fehler vorliegt, werden die Daten des Users gesetzt
            if (data.ok) {
                const umgewandelt = await data.json();
                setUserData(umgewandelt);
                // Hier können die Bildpfad hinzugefügt werden
                setProfilePicture(process.env.REACT_APP_BACKEND_IMAGES + "/" + umgewandelt.image);
            } else {
                console.log(`Error fetching user data: ${data.status} ${data.statusText}`)
                navigate('/login')
            }
            // console.log(user.email);
        }
        // Aufruf der Funktion, die die Benutzerdaten holt
        getUserDaten()
    }, [])

    console.log(sortedDataDiff);
    console.log(sortedDataWithType1);
    console.log(sortedDataWithType2);

    return (
        <>
            <main className="reports">
                <Article
                    title="Reports"
                    img={profilePicture}
                />
                <div className="chartContainer">
                    <h2>Income Data</h2>
                    <MyChart data={sortedDataWithType1.sort((a, b) => new Date(a.transDate) - new Date(b.transDate))} color="green" type="1" />
                </div>
                <div className="chartContainer">
                    <h2>Expense Data</h2>
                    <MyChart data={sortedDataWithType2.sort((a, b) => new Date(a.transDate) - new Date(b.transDate))} color="red" type="2" />
                </div>
                {/* <div className="chartContainer">
                    <h2>Difference Data</h2>
                    <MyChart data={sortedDataDiff.sort((a, b) => new Date(a.transDate) - new Date(b.transDate))} color="purple" type="3" />
                </div> */}
            </main>
            <Navigation />
        </>
    );
}

export default Reports;
