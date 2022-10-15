import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import Home from "./pages/Home/Home";
import Bollywood from "./pages/Bollywood/Bollywood";
import './App.css';
// import NavbarOne from "./main/NavbarOne";
import ContantOne from "./contant/contant1";
// import ContactTwo from "./contant/contant2";
// import ContactTwo from "./contant/contant2";
import AnyOne from "./pages/Home/anyone";
// import Technology from "./pages/Technology";
import Technology from "./pages/Technology/Technology";
import ContantThree from "./contant/contant3";
import Hollywood from "./pages/Home/Hollywood/Hollywood";
import Fitness from "./pages/Home/fitness/fitness";
import ContantFour from "./contant/contant4";
import Food from "./pages/Food";
import ContantFive from "./contant/contant5";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Bollywood" element={<Bollywood />}></Route>
          <Route path="contant1" element={<ContantOne />}></Route>
          <Route path="Technology" element={<Technology />}></Route>
          <Route path="Hollywood" element={<Hollywood />}></Route>
          <Route path="Hollywood" element={<Hollywood />}></Route>
          <Route path="anyone" element={<AnyOne />}></Route>
          <Route path="fitness" element={<Fitness />}></Route>
          <Route path="contant3" element={<ContantThree />}></Route>
          <Route path="contant4" element={<ContantFour />}> </Route>
          <Route path="Food" element={<Food />}></Route>
          <Route path="contant5" element={<ContantFive />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
