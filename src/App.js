import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages//home/Home.jsx';
import Heropage from './pages/Heropage/Heropage';
import Login_register from './pages/login/Login_register.jsx';
import Landingpage1 from './pages/LandingPage1/LandingPage1';
import Landingpage2 from './pages/LandingPage2/LandingPage2';
import Reports from './pages/reports/Reports';
import Add from './pages/add/Add';
import Transaction from './pages/transaction/Transaction';
import Remove from './pages/remove/Remove';
import Account from './pages/account/Account';







function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Heropage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/landingpage1" element={<Landingpage1 />} />
          <Route path="/landingpage2" element={<Landingpage2 />} />
          <Route path="/login_register" element={<Login_register />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/add" element={<Add />} />
          <Route path="/remove" element={<Remove />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
