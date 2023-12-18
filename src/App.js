import Navbar from './pages/Navbar';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Footer from './pages/Footer'
import PayementSoftware from './pages/PayementSoftware';
function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About/>
      <Products/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
