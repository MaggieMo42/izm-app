
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Blog from './components/pages/Blog';
import BlogSingle from './components/pages/BlogSingle';
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
<Route path="/blog" element={<Blog />} />
<Route path="/blog/:id" element={<BlogSingle />} />

</Routes>
 
  <Footer />
  


    </div>
    </Router>
  );
}

export default App;
