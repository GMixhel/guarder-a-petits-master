import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../layout/Home";
import Ankors from "../components/Ankors";
import About from "../layout/About";
import ScrollToTop from "../components/ScrollToTop";
import { AnimatePresence } from "framer-motion";

export const RouterDom = () => {
  const location = useLocation();
  return (
    <div>
      {/*Header */}
      <Ankors/>
      <ScrollToTop />

      {/*Contenido central*/}
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="*"
            element={<h2 className="error__title">Error 404</h2>}
          />
        </Routes>
      </AnimatePresence>

      {/*Footer*/}
    </div>
  );
};
