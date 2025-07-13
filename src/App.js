import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Magazines from "./components/Magazine/Magazine";
import Team from "./components/Team/Team"; // Updated Team Section
import TeamPage from "./components/Team/TeamPage"; // New Team Page
import Events from "./components/Events/Events";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Inspirations from "./components/Inspirations/Inspirations";
import "font-awesome/css/font-awesome.min.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Main Page with all sections */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Inspirations />
                <Team />
                <Events />
                <Magazines />
                <Contact />
                <Footer />
              </>
            }
          />
          {/* New Team Page */}
          <Route path="/teampage" element={<TeamPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
