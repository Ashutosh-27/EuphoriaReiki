import './App.css';

import Home from './components/Home/Home.js';
import Treatement from './components/Home/Treatement.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">

       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatment" element={<Treatement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
