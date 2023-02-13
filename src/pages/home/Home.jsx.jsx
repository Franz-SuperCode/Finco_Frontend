import "./Home.css";
import Spending from "../../assets/img/Spending.svg"
import Card from "../../assets/img/Card.svg"
import InEx from "../../components/inex/InEx";
import Navigation from "../../components/navigation/Navigation";
function Home() {

    return (
        <main className="Home">
            <article>
                <div>
                    <p>Welcome Back</p>
                    <h1>Jonathan Doe</h1>
                </div>
                <img className="profilePic" src="https://unsplash.it/50/50?1" />
            </article>
            <img className="cardImg" src={Card} />
            <h2>Total Wallet</h2>
            <InEx />
            <div className="spending">
                <img src={Spending} />
                <p>Monthly spending limit</p>
                <p>$ 0</p>
            </div>
            <Navigation />
        </main>
    )
}

export default Home;