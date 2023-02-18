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
        description="Lorem ipsum dolar sit amet" />
      {/* <p className="skip">Skip</p> */}
      <div>
        <Link className='skip' to="/home">Skip</Link>
        <Button
          title="Next →"
          path="/landingpage2" />
      </div>



    </main>
  )
}

export default Landingpage1;



