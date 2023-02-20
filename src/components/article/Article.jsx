import "./Article.css";
import logo from "../../assets/img/Hero.svg"
import { Link } from "react-router-dom";

const Article = (props) => {
    return (
        <div className="Article">
            <div>
                <img className="logo" src={logo} alt="Logo" />
                <Link to="/account">  <img className="profilePic" src={props.img} /></Link>
            </div>

            <article>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </article>
        </div>
    );
}

export default Article;