import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../../assets/img/Hero.svg";
import './Heropage.css';


function Heropage() {
  const weiterleitung = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      weiterleitung('/landingpage1')
    }, 3000)
  })


  return (
    <main className="heroPage">
      <img src={hero} />
    </main>
  )
}

export default Heropage;
