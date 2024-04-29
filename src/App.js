import './App.css';
import Navbar from './Components/Navbar.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarDsktop from './Components/NavbarDsktop.tsx';
import Footer from './Components/Footer.tsx';
import Sea from './pages/Sea.tsx';
import Montain from './pages/Montain.tsx';
import Forest from './pages/Forest.tsx';
import Ticket from './pages/Ticket.tsx';
import ScrollNavbar from './Components/ScrollNavbar.tsx';
import Home from './pages/Home.tsx';
import EasterOffers from './pages/EasterOffers.tsx';
import NewYearEveOffers from './pages/NewYearEveOffers.tsx';
import ChristmasOffers from './pages/ChristmasOffers.tsx';
import SummerOffers from './pages/SummerOffers.tsx';
import SkiOffers from './pages/SkiOffers.tsx';
import RecommendationsOffers from './pages/RecommendationsOffers.tsx';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className="hidden md:block"><NavbarDsktop/></div>
     <ScrollNavbar/>
    
    
     <BrowserRouter>
      <Routes>

          <Route path="recommendationsoffers" element={<RecommendationsOffers />} />
          <Route path="skioffers" element={<SkiOffers />} />
          <Route path="summeroffers" element={<SummerOffers />} />
          <Route path="christmasoffers" element={<ChristmasOffers />} />
          <Route path="newyearseveoffers" element={<NewYearEveOffers />} />
          <Route path="easteroffers" element={<EasterOffers />} />
          <Route path="montain" element={<Montain />} />
          <Route path="sea" element={<Sea />} />
          <Route path="forest" element={<Forest />} />
          <Route path="ticket" element={<Ticket />} />
          <Route path="/" element={<Home />}>

        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;