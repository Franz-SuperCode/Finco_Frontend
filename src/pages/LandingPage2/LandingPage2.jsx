// Hier werden neue Produkte angelegt

import landingpage2 from '../../assets/img/LandingPage2.svg';
import Article from '../../components/article/Article';
import Button from '../../components/button/Button';
import './LandingPage2.css';


function Landingpage2() {

    return (
        <main className="landingPage1">
            <img src={landingpage2} />

            <Article
                title="Analyze your spending"
                description="Lorem ipsum dolar sit amet" />
            {/* <p className="skip">Skip</p> */}
            <Button
                title="Get Started →"
                path="/login_register" />


        </main>
    )
}

export default Landingpage2;