import './App.css';
import Navbar from './Components/Navbar.tsx';
import NavbarDsktop from './Components/NavbarDsktop.tsx';
import Content from './Components/Content.tsx';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className="hidden sm:block"><NavbarDsktop/></div>
     <Content/>
    </div>
  );
}

export default App;