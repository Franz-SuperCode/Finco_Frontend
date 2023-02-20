// Hier werden neue Produkte angelegt

import { Link } from 'react-router-dom';
import landingpage1 from '../../assets/img/LandingPage1.svg';
import Article from '../../components/article/Article';
import Button from '../../components/button/Button';
import './LandingPage1.css';


function Landingpage1() {

  return (
    <main className="landingPage1">
      <img src={landingpage1} />

      <Article
        title="Track your spend and income"
        description="I would choose Finco" />
      {/* <p className="skip">Skip</p> */}
      <div className="div_skip">
        <Link className='skip' to="/login_register">Skip</Link>
        <Button
          title="Next →"
          path="/landingpage2" />
      </div>



    </main>
  )
}

export default Landingpage1;



