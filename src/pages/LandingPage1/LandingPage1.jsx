// Hier werden neue Produkte angelegt

import landingpage1 from '../../assets/img/LandingPage1.svg';
import Button from '../../components/button/Button';
import './LandingPage1.css';


function Landingpage1() {

    return (
        <main className="landingPage1">
      <img src={landingpage1}/>
      <article className="middleText">
      <h1>Track your spend and income</h1>
      <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt et.</p>
      </article>
      <div>
      <p className="skip">Skip</p>
      <Button
        title="Next →"
        path="/" />
        </div>

    </main>
    )
}

export default Landingpage1;



