import "./Article.css";
import logo from "../../assets/img/logo.svg"

const Article = (props) => {
    return (
        <div className="Article">
            <div>
                <img className="logo" src={logo} alt="Logo" />
                <img className="profilePic" src="https://unsplash.it/50/50?1" />
            </div>

            <section>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </section>
        </div>
    );
}

export default Article;