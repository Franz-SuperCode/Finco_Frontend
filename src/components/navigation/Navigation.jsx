import "./Navigation.css";
import creditCard from "../../assets/img/creditCard.svg"
import plusCircle from "../../assets/img/plusCircle.svg"
import pieChart from "../../assets/img/pieChart.svg"
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="Navigation">
            <Link to="/"> <p>HOME</p> </Link>
            <Link to="/transaction"> <img src={creditCard} /> </Link>
            <img src={plusCircle} />
            <Link to="/reports"> <img src={pieChart} /> </Link>
        </div>
    );
}

export default Navigation;