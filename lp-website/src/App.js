import './App.css';
import Navbar from './Pages/Navbar';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Faq from './Pages/FAQ/Faq';
import Sponsors from './Pages/Sponsors/Sponsors';
import Team from './Pages/Team/Team';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<About/>}/>
          <Route path = "/contatcs" element = {<Contact/>}/>
          <Route path = "/faq" element={<Faq/>} />
          <Route path = "/sponsors" element = {<Sponsors/>}/>
          <Route path = "/team" element = {<Team/>}/>
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
