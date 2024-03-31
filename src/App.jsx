import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Agribusiness from "./components/Solutions/Agribusiness";
import Framer from "./components/Solutions/Framer";
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="framer" element={<Framer/>} />
          <Route path="agribusiness" element={<Agribusiness />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
