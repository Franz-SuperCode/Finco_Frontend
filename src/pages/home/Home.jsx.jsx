import "./Home.css";
import Spending from "../../assets/img/Spending.svg"
import Card from "../../assets/img/Card.svg"
import InEx from "../../components/inex/InEx";
import Navigation from "../../components/navigation/Navigation";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Article from "../../components/article/Article";

function Home() {
    // State-Hook "user" wird initialisiert mit null, weil der Benutzer am Anfang noch nicht eingeloggt ist
    const [userData, setUserData] = useState(null)
    const [profilePicture, setProfilePicture] = useState("");
    const navigate = useNavigate()


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
                navigate('/login_register')
            }
            // console.log(user.email);
        }
        // Aufruf der Funktion, die die Benutzerdaten holt
        getUserDaten()
    }, [])

    useEffect(() => {
        console.log(userData);
    }, [userData]);


    const [isRotated, setIsRotated] = useState(false);

    const toggleRotate = () => {
        setIsRotated(!isRotated);
    };

    return (
        <>
            <main className="Home">
                <Article
                    title="Welcome Back"
                    description={userData?.name}
                    img={profilePicture}
                />
                <img className={`cardImg ${isRotated ? 'rotated' : ''}`} src={Card} onClick={toggleRotate} />

                <h2>Total Wallet</h2>
                <InEx />
                <div className="spending">
                    <img src={Spending} />
                    <p>Monthly spending limit</p>
                    <p>5000 €</p>
                </div>
            </main>
            <Navigation />
        </>

    )
}

export default Home;