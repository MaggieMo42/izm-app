
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "slick-carousel/slick/slick.css"; 

import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import HumanDesign from "./components/pages/HumanDesign";
import KundaliniYoga from "./components/pages/KundaliniYoga";
import ThetaHealing from "./components/pages/ThetaHealing";
import ZvucnaMasaza from "./components/pages/ZvucnaMasaza";
import Cjenik from "./components/pages/Cjenik";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
 <Header />

<Routes>
<Route index element={<Home />} />
<Route path="/services" element={<Services />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/HumanDesign" element={<HumanDesign />} />
<Route path="/KundaliniYoga" element={<KundaliniYoga />} />
<Route path="/ThetaHealing" element={<ThetaHealing />} />
<Route path="/ZvucnaMasaza" element={<ZvucnaMasaza />} />
<Route path="/Cjenik" element={<Cjenik />} />
</Routes>
 
  <Footer />
  


    </div>
    </Router>
  );
}

export default App;
