import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Footer from './components/Footer';
import Services from './components/Services';
import Features from './components/Features';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Register from './components/Register';
import Dashboard from './components/Dashboard';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/features" element={<Features/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
