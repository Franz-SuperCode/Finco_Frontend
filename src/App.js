import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages//home/Home.jsx';
import Heropage from './pages/Heropage/Heropage';
import SignUp1 from './pages/signUp1/SignUp1.jsx';
import SignUp2 from './pages/signUp2/SignUp2.jsx';
import Login from './pages/login/Login.jsx';
import Landingpage1 from './pages/LandingPage1/LandingPage1';
import Landingpage2 from './pages/LandingPage2/LandingPage2';
import Reports from './pages/reports/Reports';
import Add from './pages/add/Add';
import Expense from './pages/expense/Expense';
import Transaction from './pages/transaction/Transaction';







function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heropage" element={<Heropage />} />
          <Route path="/landingpage1" element={<Landingpage1 />} />
          <Route path="/landingpage2" element={<Landingpage2 />} />
          <Route path="/signup1" element={<SignUp1 />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/add" element={<Add />} />
          <Route path="/expense" element={<Expense />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
