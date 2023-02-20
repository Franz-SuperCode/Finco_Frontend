import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import InEx from "../../components/inex/InEx.jsx";
import Navigation from "../../components/navigation/Navigation";
import "./Transaction.css"
import fakeData from "../../fakeData.json"
import Search from "../../assets/img/Search.svg"
import bin from "../../assets/img/bin.svg"
import { useNavigate } from "react-router-dom";


function Transaction() {
    const [userData, setUserData] = useState(null)
    const [transactionType, setTransactionType] = useState(1);
    const [profilePicture, setProfilePicture] = useState("");
    const handleTransactionTypeChange = (event) => {
        setTransactionType(Number(event.target.value));
    };
    const [showIncome, setShowIncome] = useState(false);
    const [showExpense, setShowExpense] = useState(false);

    const [newData, setNewData] = useState();
    const [refresh, setRefresh] = useState(true);
    const [inputValue, setInputValue] = useState();
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
                navigate('/login')
            }
            // console.log(user.email);
        }
        // Aufruf der Funktion, die die Benutzerdaten holt
        getUserDaten()
    }, [])





    //! Daten aus API holen
    useEffect(() => {
        async function getData() {
            const baseUrl = process.env.REACT_APP_BACKEND_URL;
            const endpoint = '/transaction'
            const data = await fetch(baseUrl + endpoint);
            const dataJS = await data.json();
            setNewData(dataJS)
            console.log("dataJS:", dataJS);
        }
        getData();
    }, [refresh])

    //! Daten sortieren nach Datum absteigend -------
    const sortedData = newData?.sort((a, b) => {
        //Erzeuge aus transDate ein Datum-Objekt
        const dateA = new Date(a.transDate);
        const dateB = new Date(b.transDate);
        return dateB - dateA;
    });
    //! -------Input Category------------------
    const resultFilter = newData?.filter(object => {
        //Prüfe ob zunächst object.transCategory und inputValue Werte haben
        if (object.transCategory && inputValue) {

            return object.transCategory?.toLowerCase().includes(inputValue.toLowerCase());
        } else {
            return false
        }
    })

    //! -------Input Income-Expense------------------
    const resultFilterInEx = newData?.filter(object => {
        if (object.transType && inputValue) {
            const transactionType = object.transType == 1 ? 'income' : 'expense';
            return transactionType.toLowerCase() === inputValue.toLowerCase();
        } else if (!inputValue) {
            return true; // Wenn kein Eingabewert vorhanden ist, gebe alle Objekte zurück
        } else {
            return false; // Wenn keine Übereinstimmung gefunden wurde, gebe false zurück
        }
    });

    //TODO ------Checkbox---------------

    const handleIncomeChange = (event) => {
        setShowIncome(event.target.checked);
    };

    const handleExpenseChange = (event) => {
        setShowExpense(event.target.checked);
    };

    const resultFilterCheckbox = newData?.filter(object => {
        if (object.transType && showIncome && !showExpense) {
            return object.transType == 1;
        } else if (object.transType && showExpense && !showIncome) {
            return object.transType == 2;
        } else {
            return false;
        }
    });
    //TODO ---------------------


    //! -------Remove------------------

    // Hier werden alle Daten aus dem formData ans Backend geschickt beim klick auf den Button
    const deleteData = async (event, _id) => {
        event.preventDefault();
        const baseUrl = process.env.REACT_APP_BACKEND_URL;
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
                <Article
                    title="All transaction"
                    img={profilePicture}
                />

                {/* Nur darstellen, falls kein Input da ist */}
                {!inputValue && <InEx />}


                <div className="searchbar">
                    {/* <img src={Search} /> */}
                    <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="🔍     Search Category or Type"></input>
                </div>



                {/* -------- Checkbox ----- /> */}
                <div>
                    <label>
                        <input name="transactionType" type="checkbox" checked={showIncome} onChange={handleIncomeChange} />
                        Income
                    </label>
                    <label>
                        <input name="transactionType" type="checkbox" checked={showExpense} onChange={handleExpenseChange} />
                        Expense
                    </label>
                </div>


                {/*----------  Falls KEIN Input vorhanden ist, über das normale Daten Array mappen ----------- */}
                {!showExpense && !showIncome && !inputValue && sortedData?.map((item, index) => {
                    console.log(item);
                    return (
                        <section className="transaction" key={index}>
                            {/* Wenn es das erste Element im Array ist oder das aktuelle Datum ungleich dem vorherigen, wird ein <h1> mit dem Datum erzeugt */}
                            {index === 0 || item.transDate !== sortedData[index - 1]?.transDate ? <h1>{item.transDate}</h1> : null}
                            <article>
                                {/* Ein Bild wird geladen, dessen URL aus einer Zufallszahl erzeugt wird */}
                                <img className="catImg" src={`https://unsplash.it/40/40?${index}`} />
                                <div>
                                    {/* Die Kategorie und die Uhrzeit werden angezeigt */}
                                    <p>{item.transCategory}</p>
                                    <p>{item.transTime}</p>
                                </div>
                                {/* Der Transaktionswert wird angezeigt */}
                                {/* Falls transType 1 ist, soll die Farbe grün werden, sonst rot */}
                                <div className="muell">
                                    {item.transType == 1 ? (
                                        <p key={index} className="green">{item.transValue} €</p>
                                    ) : (
                                        <p key={index} className="red">{item.transValue} €</p>
                                    )}

                                    <img className="bin" src={bin} _id={item._id} onClick={(event) => deleteData(event, item._id)} />
                                </div>
                                {/* <button _id={item._id} onClick={(event) => deleteData(event, item._id)}><img src={bin} /></button> */}
                            </article>
                        </section>
                    );
                })}

                {/* ----------  Falls die Checkbox Income oder Expense ausgewählt wurde, über das Array mappen ---- */}
                {(showIncome || showExpense) && resultFilterCheckbox?.map((item, index) => {

                    return (
                        <section className="transaction" key={index}>
                            {/* Wenn es das erste Element im Array ist oder das aktuelle Datum ungleich dem vorherigen, wird ein <h1> mit dem Datum erzeugt */}
                            {index === 0 || item.transDate !== sortedData[index - 1]?.transDate ? <h1>{item.transDate}</h1> : null}
                            <article>
                                {/* Ein Bild wird geladen, dessen URL aus einer Zufallszahl erzeugt wird */}
                                <img className="catImg" src={`https://unsplash.it/40/40?${index}`} />
                                <div>
                                    {/* Die Kategorie und die Uhrzeit werden angezeigt */}
                                    <p>{item.transCategory}</p>
                                    <p>{item.transTime}</p>
                                </div>
                                {/* Der Transaktionswert wird angezeigt */}
                                {/* Falls transType 1 ist, soll die Farbe grün werden, sonst rot */}
                                <div className="muell">
                                    {item.transType == 1 ? (
                                        <p key={index} className="green">{item.transValue} €</p>
                                    ) : (
                                        <p key={index} className="red">{item.transValue} €</p>
                                    )}

                                    <img className="bin" src={bin} _id={item._id} onClick={(event) => deleteData(event, item._id)} />
                                </div>
                                {/* <button _id={item._id} onClick={(event) => deleteData(event, item._id)}><img src={bin} /></button> */}
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
                                <img className="catImg" src={`https://unsplash.it/40/40?${index}`} />
                                <div>
                                    {/* Die Kategorie und die Uhrzeit werden angezeigt */}
                                    <p>{item.transCategory}</p>
                                    <p>{item.transTime}</p>
                                </div>
                                {/* Der Transaktionswert wird angezeigt */}
                                {/* Falls transType 1 ist, soll die Farbe grün werden, sonst rot */}
                                <div className="muell">
                                    {item.transType == 1 ? (
                                        <p key={index} className="green">{item.transValue} €</p>
                                    ) : (
                                        <p key={index} className="red">{item.transValue} €</p>
                                    )}

                                    <img className="bin" src={bin} _id={item._id} onClick={(event) => deleteData(event, item._id)} />
                                </div>
                                {/* <button _id={item._id} onClick={(event) => deleteData(event, item._id)}><img src={bin} /></button> */}
                            </article>
                        </section>
                    );
                })}

                {/*----------  Falls ein Income/Expense Input vorhanden ist, über das Filter Array mappen ----------- */}
                {inputValue && resultFilterInEx?.map((item, index) => {
                    return (
                        <section className="transaction" key={index}>
                            {/* Wenn es das erste Element im Array ist oder das aktuelle Datum ungleich dem vorherigen, wird ein <h1> mit dem Datum erzeugt */}
                            {index === 0 || item.transDate !== sortedData[index - 1]?.transDate ? <h1>{item.transDate}</h1> : null}
                            <article>
                                {/* Ein Bild wird geladen, dessen URL aus einer Zufallszahl erzeugt wird */}
                                <img className="catImg" src={`https://unsplash.it/40/40?${index}`} />
                                <div>
                                    {/* Die Kategorie und die Uhrzeit werden angezeigt */}
                                    <p>{item.transCategory}</p>
                                    <p>{item.transTime}</p>
                                </div>
                                {/* Der Transaktionswert wird angezeigt */}
                                {/* Falls transType 1 ist, soll die Farbe grün werden, sonst rot */}
                                <div className="muell">
                                    {item.transType == 1 ? (
                                        <p key={index} className="green">{item.transValue} €</p>
                                    ) : (
                                        <p key={index} className="red">{item.transValue} €</p>
                                    )}

                                    <img className="bin" src={bin} _id={item._id} onClick={(event) => deleteData(event, item._id)} />
                                </div>
                                {/* <button _id={item._id} onClick={(event) => deleteData(event, item._id)}><img src={bin} /></button> */}
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