import "./Article.css";
import logo from "../../assets/img/logo.svg"

const Article = (props) => {
    return (
        <div className="Article">
            <img src={logo} alt="Logo" />
            <section>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </section>
        </div>
    );
}

export default Article;