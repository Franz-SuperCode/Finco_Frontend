import "./Home.css";
import Spending from "../../assets/img/Spending.svg"
import Card from "../../assets/img/Card.svg"
import InEx from "../../components/inex/InEx";
import Navigation from "../../components/navigation/Navigation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    // State-Hook "user" wird initialisiert mit null, weil der Benutzer am Anfang noch nicht eingeloggt ist
    const [user, setUser] = useState(null)
    const navigate = useNavigate()


    useEffect(() => {
        // Funktion, die die Daten des Benutzers vom Backend-Server holt
        const userDaten = async () => {
            // URL und Endpunkt des Backend-Servers werden definiert
            const baseUrl = process.env.REACT_APP_BACKEND_URL
            //Route um alle Daten vom User zu bekommen
            const endpoint = '/user'
            // HTTP-Anfrage zum Backend-Server wird ausgeführt
            const response = await fetch(baseUrl + endpoint, {
                credentials: 'include'
            })
            // Wenn HTTP-Anfrage erfolgreich war, werden die Benutzerdaten im State "user" gesetzt
            // Andernfalls wird der Benutzer zurück zum Login-Bildschirm navigiert
            if (response.ok) {
                const data = await response.json()
                setUser(data.email)
            } else {
                navigate('/login')
            }
            console.log(user.email);
        }
        // Aufruf der Funktion, die die Benutzerdaten holt
        userDaten()
    })

    return (
        <main className="Home">
            <article>
                <div>
                    <p>Welcome Back</p>
                    {/* Test ob es klappt mit User */}
                    <h1>Jonathan Doe {user}</h1>
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