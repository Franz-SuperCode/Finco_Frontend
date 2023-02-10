import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages//home/Home.jsx';
import Heropage from './pages/Heropage/Heropage';
import SignUp1 from './pages/signUp1/SignUp1.jsx';
import SignUp2 from './pages/signUp2/SignUp2.jsx';
import Login from './pages/login/Login.jsx';






function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heropage" element={<Heropage />} />
          <Route path="/signup1" element={<SignUp1 />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
