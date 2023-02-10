import { Link } from "react-router-dom";
import "./Footer.css";


const Footer = (props) => {
    return (
        <footer className="footer">
            <p>{props.description}</p>
            <Link to={props.path}> <p>{props.textLinkTo}</p> </Link>
        </footer>
    );
}

export default Footer;