import Article from "../../components/article/Article.jsx";
import Button from "../../components/button/Button.jsx";
import logo from "../../assets/img/logo.svg"
import imageIcon from "../../assets/img/imageIcon.svg"
import "./SignUp2.css"

function SignUp1() {

    return (
        <main className="SignUp2">
            <Article
                title="Setup your account"
                description="Lorem Impsum Lorem Ipsum"
            />
            <form>
                <div>
                    <label>Profile Picture</label>
                    <input className="textArea" type="file"></input>
                </div>

                <input className="cardNumber" type="text" placeholder="Card Number"></input>

                <Button
                    title="Profile Complete"
                    path="/"
                />

            </form>
        </main>
    )
}

export default SignUp1;