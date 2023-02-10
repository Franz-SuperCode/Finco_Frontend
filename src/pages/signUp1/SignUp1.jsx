import logo from "../../assets/img/logo.svg"
import Article from "../../components/article/Article.jsx"
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer.jsx";

import "./SignUp1.css"
function SignUp1() {

    return (
        <main className="SignUp1">

            <Article
                title="Create an account"
                description="Lorem Ipsum Lorem Ipsum"
            />
            <form>
                <input className="fullWidth" type="text" placeholder="Name"></input>
                <input className="fullWidth" type="text" placeholder="Email"></input>
                <input className="fullWidth" type="text" placeholder="Password"></input>
                <div className="agreeCheck">
                    <input name="agreeCheck" type="checkbox"></input>
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