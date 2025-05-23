import { Route, Routes } from "react-router";
import { HelmetProvider } from 'react-helmet-async';
import "./App.css";
import "animate.css";
import LandingPage from "./components/landing";
import Header from "./components/header";
import Footer from "./components/footer";
import Cursor from "./components/cursor";
import PortfolioPage from "./components/portfolio";
import PortfolioDetailsPage from "./components/portfolioDetails";
import AboutUsPage from "./components/about";
import ServicesPage from "./components/services";
import CareersPage from "./components/career";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <HelmetProvider>
      <Cursor />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <LandingPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/careers"
          element={
            <>
              <Header />
              <CareersPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/portfolio"
          element={
            <>
              <Header />
              <PortfolioPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/portfolio/:key"
          element={
            <>
              <PortfolioDetailsPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <AboutUsPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Header />
              <ServicesPage />
              <Footer />
            </>
          }
        />
        
      </Routes>
    </HelmetProvider>
  );
}

export default App;
