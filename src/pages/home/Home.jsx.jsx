import "./Home.css";
import Spending from "../../assets/img/Spending.svg"
import Card from "../../assets/img/Card.svg"
import InEx from "../../components/inex/InEx";
import Navigation from "../../components/navigation/Navigation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    // State-Hook "user" wird initialisiert mit null, weil der Benutzer am Anfang noch nicht eingeloggt ist
    const [userData, setUserData] = useState(null)
    const navigate = useNavigate()


    useEffect(() => {
        // Funktion, die die Daten des Benutzers vom Backend-Server holt
        const getUserDaten = async () => {
            // URL und Endpunkt des Backend-Servers werden definiert
            const baseUrl = process.env.REACT_APP_BACKEND_URL2
            //Route um alle Daten vom User zu bekommen
            const endpoint = '/user'
            // HTTP-Anfrage zum Backend-Server wird ausgeführt
            const data = await fetch(baseUrl + endpoint, {
                credentials: 'include'
            })
            console.log(data);



            // Wenn HTTP-Anfrage erfolgreich war, werden die Benutzerdaten im State "user" gesetzt
            // Andernfalls wird der Benutzer zurück zum Login-Bildschirm navigiert
            if (data.ok) {
                const umgewandelt = await data.json()
                console.log(umgewandelt);
                setUserData(umgewandelt.name)
                userData && console.log(userData);

            } else {
                console.log(`Error fetching user data: ${data.status} ${data.statusText}`)
                navigate('/login')
            }
            // console.log(user.email);
        }
        // Aufruf der Funktion, die die Benutzerdaten holt
        getUserDaten()
    }, [])

    useEffect(() => {
        console.log(userData);
    }, [userData]);


    return (
        <main className="Home">
            <article>
                <div>
                    <p>Welcome Back</p>
                    {/* Test ob es klappt mit User */}
                    <h1>{userData}</h1>
                </div>
                <img className="profilePic" src="https://unsplash.it/50/50?1" />
            </article>
            <img className="cardImg" src={Card} />
            <h2>Total Wallet</h2>
            <InEx />
            <div className="spending">
                <img src={Spending} />
                <p>Monthly spending limit</p>
                <p>5000 €</p>
            </div>
            <Navigation />
        </main>
    )
}

export default Home;