import Navbar from './pages/Navbar';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Footer from './pages/Footer'
import Payment from './pages/Payment';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <div>
            <Navbar/>
            <Home />
            <About/>
            <Products/>
            <Contact/>
            <Footer/>
          </div>
        }/>
        <Route path='/payment' element={
          <div>
            <Payment/>
          </div>
        }/>
      </Routes>
    </div>
  );
}

export default App;
