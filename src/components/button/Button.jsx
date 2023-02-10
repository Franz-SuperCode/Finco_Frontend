import { Link } from "react-router-dom";
import "./Button.css";


const Button = (props) => {
    return (
        <Link to={props.path}>
            <button className="Button">
                {props.title}
            </button>
        </Link>
    );
}

export default Button;