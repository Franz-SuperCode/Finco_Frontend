import "./Article.css";


const Article = (props) => {
    return (
        <div className="Article">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default Article;