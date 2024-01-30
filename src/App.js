import "./App.css";
// import Nav from "./Componants/Nav/Nav";
// import Header from "./Componants/Headre/Header";
// import Section from "./Componants/Section/Section";
// import Footer from "./Componants/Footer/Footer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import InCart from "./Componants/Nav/InCart";
import Allpages from "./Componants/AllPages/Allpages";
import { CartProvider } from "react-use-cart";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/InCart" element={<InCart />} />
            <Route path="/" element={<Allpages />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;

//  <BrowserRouter>
// <Routes>
// <Route path="/" element={<Home />} />
// <Route path="/Header" element={<Header />} />
// <Route path="/Section" element={<Section />} />
// <Route path="/InCart" element={<InCart />} />
// <Route path="/Footer" element={<Footer />} />
// </Routes>
// </BrowserRouter>
//////////////////////////////////////////////////////////////////
//  <BrowserRouter>
// <Routes>
// <Route path="/" element={<Home />} />
// <Route path="/Header" element={<Header />} />
// <Route path="/Footer" element={<Footer />} />
// <Route path="*" element={<Error />} />
// </Routes>
// </BrowserRouter>
