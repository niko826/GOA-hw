import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />       {/* მთავარი გვერდი */}
        <Route path="/about" element={<About />} /> {/* ჩვენს შესახებ */}
        <Route path="/contact" element={<Contact />} /> {/* კონტაქტი */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
