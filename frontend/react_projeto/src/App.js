import "./App.css";
import ModalPiloto from "./Components/ModalPiloto/ModalPiloto";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import MeuTime from "./Components/MeuTime/MeuTime";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/listarPilotos" element={<ModalPiloto/>}/>
          <Route path="/meuTime" element={<MeuTime/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>    
  );
}

export default App;
