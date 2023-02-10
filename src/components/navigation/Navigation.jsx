import "./Navigation.css";
import creditCard from "../../assets/img/creditCard.svg"
import plusCircle from "../../assets/img/plusCircle.svg"
import pieChart from "../../assets/img/pieChart.svg"

const Navigation = () => {
    return (
        <div className="Navigation">
            <p>HOME</p>
            <img src={creditCard} />
            <img src={plusCircle} />
            <img src={pieChart} />
        </div>
    );
}

export default Navigation;