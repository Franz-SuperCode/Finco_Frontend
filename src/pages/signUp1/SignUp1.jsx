import logo from "../../assets/img/logo.svg"
import Article from "../../components/article/Article.jsx"
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer.jsx";

import "./SignUp1.css"
function SignUp1() {

    return (
        <main className="SignUp1">
            <img src={logo} alt="Logo" />
            <Article
                title="Create an account"
                description="Lorem Ipsum Lorem Ipsum"
            />
            <form>
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Password"></input>
                <div>
                    <input id="agreeCheck" name="agreeCheck" type="checkbox"></input>
                    <label >Agree to our Terms and Service</label>
                </div>
                <Button
                    title="Register Now"
                    path="/signUp2"
                />

            </form>
            <Footer
                description="Already have an account?"
                path="/login"
                textLinkTo="Login"
            />
        </main>
    )
}

export default SignUp1;