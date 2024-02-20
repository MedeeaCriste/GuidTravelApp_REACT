import './App.css';
import Navbar from './Components/Navbar.tsx';
import NavbarDsktop from './Components/NavbarDsktop.tsx';
import Content from './Components/Content.tsx';
import Footer from './Components/Footer.tsx';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className="hidden md:block"><NavbarDsktop/></div>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;