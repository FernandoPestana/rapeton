import { Route, Routes, useLocation } from "react-router-dom"
import './App.scss'
import { AnimatePresence } from 'framer-motion';
import { pageVariants, pageTransition } from './animation/animation';
import Header from "./layouts/Header"
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Artists from './pages/Artists'
import Gallery from './pages/Gallery'
import Shop from './pages/Shop'
import Contact from "./pages/Contact"
import Footer from "./layouts/Footer"
import Nav from "./components/Nav"
import Banner from "./components/Banner"
import { useSelector } from "react-redux";


function App() {

  const banner = useSelector(state => state.banner)
  const location = useLocation();

  return (
    <main className={`app ${ banner ? 'bannerOff' : ''}`}>
      <Banner />
      <Header />
      <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      <Nav />
      <Footer />
    </main>
  )
}

export default App
