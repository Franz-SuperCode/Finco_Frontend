// Hier werden neue Produkte angelegt

import landingpage2 from '../../assets/img/LandingPage2.svg';
import Button from '../../components/button/Button';
import './LandingPage2.css';

function Landingpage2() {

    return (
        <main className="landingPage2">
        <img src={landingpage2}/>
        <article className="middleText">
        <h1>Analyze your spending</h1>
        <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt et.</p>
        </article>
        <div>
        <Button 
        title="Get Started →"
        path="/" />
        </div>

        </main>
    )
}

export default Landingpage2;