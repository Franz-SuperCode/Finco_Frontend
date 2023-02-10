import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Heropage from './pages/Heropage/Heropage';






function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heropage" element={<Heropage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
