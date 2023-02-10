import logo from "../../assets/img/logo.svg"
import Article from "../../components/article/Article.jsx"
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer.jsx";
import "./Login.css"

function Login() {

    return (
        <main className="Login">
            <Article
                title="Welcome Back"
                description="Lorem Ipsum Lorem Ipsum"
            />
            <form>
                <input className="fullWidth" type="text" placeholder="Email"></input>
                <input className="fullWidth" type="text" placeholder="Password"></input>
                <Button
                    title="Login"
                    path="/"
                />
            </form>
            <Footer
                description="Dont have any account?"
                path="/signUp1"
                textLinkTo="Sign up"
            />
        </main>
    )
}

export default Login;