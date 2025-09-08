import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import ContactForm from "./pages/ContactForm";
import AboutMe from "./pages/AboutMe";
import UiComponents from "./pages/UiComponents";
import DetailedArticle from "./pages/DetailedArticle";

function App() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // suave
    });
  };
  return (
    <>
      <BrowserRouter>
        <Navbar handleScrollTop={handleScrollTop}></Navbar>
        <Routes>
          <Route path="/ui-components" element={<UiComponents />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path="/contact" element={<ContactForm />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Articles />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route
            path="/detalle-articulo/:id"
            element={<DetailedArticle />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
