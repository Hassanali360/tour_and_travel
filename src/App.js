import "./App.css";
import NavBar from "./Assets/NavBar";
import Home from './pages/Home'
import ContactUs from './Assets/ContactUs'
import { 
  Routes,
  Route
   } from "react-router-dom";
  
function App() {
  return (
    <div className="App">
      <NavBar/>
    <Routes>
    <Route path="/" element={ <Home/>  }/>
    <Route path="/contact" element={ <ContactUs/>  }/>
      </Routes>

    </div>
  );
}

export default App;
