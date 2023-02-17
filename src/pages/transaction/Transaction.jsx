import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import InEx from "../../components/inex/InEx.jsx";
import Navigation from "../../components/navigation/Navigation";
import "./Transaction.css"
import fakeData from "../../fakeData.json"
import Search from "../../assets/img/Search.svg"



function Transaction() {



    const [newData, setNewData] = useState();
    const [refresh, setRefresh] = useState(true);
    const [inputValue, setInputValue] = useState();
    //! Daten aus API holen
    useEffect(() => {
        async function getData() {
            const baseUrl = process.env.REACT_APP_BACKEND_URL2;
            const endpoint = '/transaction'
            const data = await fetch(baseUrl + endpoint);
            const dataJS = await data.json();
            setNewData(dataJS)
            console.log("dataJS:", dataJS);
        }
        getData();
    }, [refresh])

    //! Daten sotieren nach Datum absteigend -------
    const sortedData = newData?.sort((a, b) => {
        //Erzeuge aus transDate ein Datum-Objekt
        const dateA = new Date(a.transDate);
        const dateB = new Date(b.transDate);
        return dateB - dateA;
    });
    //! -------Input------------------
    const resultFilter = newData?.filter(object => {
        //Prüfe ob zunächst object.transCategory und inputValue Werte haben
        if (object.transCategory && inputValue) {

            return object.transCategory?.toLowerCase().includes(inputValue.toLowerCase());
        } else {
            return false
        }
    })

    //! -------Remove------------------

    // Hier werden alle Daten aus dem formData ans Backend geschickt beim klick auf den Button
    const deleteData = async (event, _id) => {
        event.preventDefault();
        const baseUrl = process.env.REACT_APP_BACKEND_URL2;
        const endpoint = `/transaction/${_id}`
        const data = await fetch(baseUrl + endpoint, {
            method: "DELETE"
        });
        // const dataJS = await data.json();
        // console.log(data);
        setRefresh(prevData => !prevData)
        //useNavigate mit nav sorgt dafür dass die Seite eine Seite zurück springt
        // nav(-1);
    }



    return (
        <main>
            <section className="allContent">
                Transaction SEITE
                <Article
                    title="All transaction" />
                <div>
                    <img src={Search} />
                    <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Search Category"></input>
                </div>

                {/* Nur darstellen, falls kein Input da ist */}
                {!inputValue && <InEx />}

                {/*----------  Falls KEIN Input vorhanden ist, über das normale Daten Array mappen ----------- */}
                {!inputValue && sortedData?.map((item, index) => {
                    return (
                        <section className="transaction" key={index}>
                            {/* Wenn es das erste Element im Array ist oder das aktuelle Datum ungleich dem vorherigen, wird ein <h1> mit dem Datum erzeugt */}
                            {index === 0 || item.transDate !== sortedData[index - 1]?.transDate ? <h1>{item.transDate}</h1> : null}
                            <article>
                                {/* Ein Bild wird geladen, dessen URL aus einer Zufallszahl erzeugt wird */}
                                <img src={`https://unsplash.it/40/40?${index}`} />
                                <div>
                                    {/* Die Kategorie und die Uhrzeit werden angezeigt */}
                                    <p>{item.transCategor}</p>
                                    <p>{item.transTime}</p>
                                </div>
                                {/* Der Transaktionswert wird angezeigt */}
                                <p key={index}>{item.transValue} €</p>
                                <button _id={item._id} onClick={(event) => deleteData(event, item._id)}>DELETE</button>
                            </article>
                        </section>
                    );
                })}

                {/*----------  Falls ein Input vorhanden ist, über das Filter Array mappen ----------- */}
                {inputValue && resultFilter?.map((item, index) => {
                    return (
                        <section className="transaction" key={index}>
                            {/* Wenn es das erste Element im Array ist oder das aktuelle Datum ungleich dem vorherigen, wird ein <h1> mit dem Datum erzeugt */}
                            {index === 0 || item.transDate !== sortedData[index - 1]?.transDate ? <h1>{item.transDate}</h1> : null}
                            <article>
                                {/* Ein Bild wird geladen, dessen URL aus einer Zufallszahl erzeugt wird */}
                                <img src={`https://unsplash.it/40/40?${index}`} />
                                <div>
                                    {/* Die Kategorie und die Uhrzeit werden angezeigt */}
                                    <p>{item.transCategory}</p>
                                    <p>{item.transTime}</p>
                                </div>
                                {/* Der Transaktionswert wird angezeigt */}
                                <p key={index}>{item.transValue} €</p>
                            </article>
                        </section>
                    );
                })}


            </section>
            <Navigation />
        </main>
    )
}

export default Transaction;