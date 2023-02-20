import "./Navigation.css";
import creditCard from "../../assets/img/creditCard.svg"
import plusCircle from "../../assets/img/plusCircle.svg"
import pieChart from "../../assets/img/pieChart.svg"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import InEx_Input from "../inex_input/InEx_Input";
import home from "../../assets/img/home.svg"

const Navigation = () => {

    // Zustand, der angibt, ob das Menü geöffnet oder geschlossen ist
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        const allContent = document.querySelector(".allContent");
        if (allContent) {

            if (isOpen) {
                document.querySelector(".allContent").classList.add('menu_open');
            } else {
                document.querySelector(".allContent").classList.remove('menu_open');
            }
        }
    }, [isOpen]);


    return (
        <>
            {/* Überprüfung, ob das Menü geöffnet ist (also true). Fall ja, stelle das hier dar */}
            {isOpen && (
                <InEx_Input />
            )}

            <div className="Navigation">
                <Link to="/home"> <img src={home} /> </Link>
                <Link to="/transaction"> <img src={creditCard} /> </Link>
                <img onClick={() => setIsOpen(!isOpen)} src={plusCircle} />
                <Link to="/reports"> <img src={pieChart} /> </Link>
            </div>
        </>

    );
}

export default Navigation;