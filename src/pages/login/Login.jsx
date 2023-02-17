import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.svg"
import Article from "../../components/article/Article.jsx"
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer.jsx";
import "./Login.css"

function Login() {

    // Definiere drei Zustandsvariablen mit useState, die die Registrierung, die E-Mail und das Passwort des Benutzers speichern.
    const [register, setRegister] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState(null)

    const handlePictureInputChange = (e) => {
        setImage(e.target.files[0]);
    }
    // Rufe die useNavigate-Funktion auf, um das Programm zur Weiterleitung des Benutzers nach der Authentifizierung aufzurufen.
    const navigate = useNavigate()

    // Definiere eine Funktion, um die Authentifizierung des Benutzers an die Backend-API zu senden.
    const sendAuthentification = async (e) => {
        e.preventDefault()
        // Definiere die Basis-URL für das Backend anhand der Umgebungsvariablen-Datei.

        // const baseUrl = process.env.REACT_APP_BACKEND_URL
        const baseUrl = process.env.REACT_APP_BACKEND_URL2
        // console.log(baseUrl)

        // Definiere die Endpunkte für die Authentifizierung entweder für die Registrierung oder für den Login.
        const endPoint = register ? '/register' : '/login'

        // Erstelle ein FormData-Objekt und füge die E-Mail- und Passwort-Eingaben hinzu.
        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)
        formData.append('name', name)
        formData.append('image', image)

        const handlePictureInputChange = (e) => {
            setImage(e.target.value);
        }


        // Rufe die Backend-API mit fetch auf und übergeben das FormData-Objekt an den Server.
        const response = await fetch(baseUrl + endPoint, {
            method: 'POST',
            credentials: 'include',
            body: formData
        })

        // Überprüfe die Antwort des Servers. Wenn der Server eine positive Antwort zurückgibt, leite den Benutzer entweder zur Registrierungsseite oder zum Dashboard weiter.
        if (response.ok) register ? setRegister(false) : navigate('/')
    }

    // Die AuthForm-Komponente gibt ein HTML-Formular mit Eingabefeldern für E-Mail und Passwort sowie eine Schaltfläche zum Einloggen oder Registrieren zurück.
    return (
        <main className="Login">

            <form onSubmit={sendAuthentification}>
                <div>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-Mail" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    {register && <input onChange={(e) => setName(e.target.value)} type="name" placeholder="Name" />}
                    {register && <input type="file" name="image" onChange={handlePictureInputChange} />}


                    <button type="submit">{register ? 'Register' : 'Login'}</button>
                    <p onClick={() => setRegister(prev => !prev)}>{register ? 'Already have an account?' : 'You don´t have an account yet?'}</p>
                </div>
            </form>

        </main>
    )
}

export default Login;
