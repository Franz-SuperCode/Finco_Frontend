import logo from "../../assets/img/logo.svg"
import Article from "../../components/article/Article.jsx"
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer.jsx";


function Login() {

    return (
        <main className="SignUp1">
            <img src={logo} alt="Logo" />
            <Article
                title="Welcome Back"
                description="Lorem Ipsum Lorem Ipsum"
            />
            <form>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Password"></input>
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