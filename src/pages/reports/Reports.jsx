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


    // Berechnen Sie die Differenz zwischen `transType` 1 und 2
    const dataDiff = dataWithType1.map((item, index) => ({
        transDate: item.transDate,
        transValue: parseFloat(item?.transValue) - parseFloat(dataWithType2[index]?.transValue)
    }));



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


    return (
        <>
            <main className="reports">
                <Article
                    title="Reports"
                    img={profilePicture} />
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
            </main>
            <Navigation />
        </>
    );
}

export default Reports;
