import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Agribusiness from "./components/Solutions/Agribusiness";
import Farmer from "./components/Solutions/Farmer";
import Footer from "./Footer";
import Ourstory from "./components/Ourstory";
import Privacypolicy from "./components/Privacypolicy";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contactus" element={<Contact />} />
            <Route path="farmer" element={<Farmer />} />
            <Route path="agribusiness" element={<Agribusiness />} />
            <Route path="ourstory" element={<Ourstory />} />
            <Route path="privacypolicy" element={<Privacypolicy />} />

           
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
