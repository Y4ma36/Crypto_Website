import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./Style/GlobalStyle";
import Home from "./Pages/Home";
import Prices from "./Pages/Prices";
import News from "./Pages/News";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Footer from "./Common/Footer";
import Header from "./Common/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/prices" element={<Prices />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
