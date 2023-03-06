import './App.css';
import Navbar from './Pages/Navbar';
import About from './Pages/About/About';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className = "sections">
        <About/>
      </div>
    </div>
  );
}

export default App;
