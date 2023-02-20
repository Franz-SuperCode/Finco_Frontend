import { useEffect, useState } from "react"
import Article from "../../components/article/Article"
import Navigation from "../../components/navigation/Navigation"
import "./Account.css"

function Account() {
    const [userData, setUserData] = useState(null)
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




            // Wenn HTTP-Anfrage erfolgreich war, werden die Benutzerdaten im State "user" gesetzt
            // Andernfalls wird der Benutzer zurück zum Login-Bildschirm navigiert
            if (data.ok) {
                const umgewandelt = await data.json()
                console.log(umgewandelt);
                setUserData(umgewandelt)
                userData && console.log(userData);

            } else {
                console.log(`Error fetching user data: ${data.status} ${data.statusText}`)

            }
            // console.log(user.email);
        }
        // Aufruf der Funktion, die die Benutzerdaten holt
        getUserDaten()
    }, [])


    const registeredAt = "2023-02-17T09:47:12.378Z";
    const date = new Date(registeredAt);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const formattedDate = `${day}.${month}.${year}`;
    const formattedTime = `${hours}:${minutes}`;

    console.log(formattedDate); // Ausgabe: "17.02.2023 09:47:12"



    return (
        <main className="Account">
            <Article
                title="Account Information" />
            <section>
                <p>Name: {userData?.name}</p>
                <p>E-Mail: {userData?.email}</p>
                <p>Registered Date: {formattedDate}</p>
                <p>Registered Time: {formattedTime}</p>
            </section>

            <Navigation />
        </main>
    )
}

export default Account;