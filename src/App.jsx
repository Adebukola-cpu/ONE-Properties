import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Intro from "./component/Intro";
import Residence from "./component/Residence";
import Experience from "./component/Experience";
import Gallary from "./component/Gallary";
import Location from "./component/Location";
import Footer from "./component/Footer";

import Properties from "./pages/Properties";
import Enquire from "./pages/Enquire";


function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Intro />
        <Residence />
        <Experience />
        <Gallary />
        <Location />
      </main>

    </>
  );
}


function App() {
  return (
    <>
    <Routes>

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/residences/:slug"
        element={<Properties />}
      />

      <Route 
        path="/enquire" 
        element={<Enquire />} 
        />
    </Routes>

    <Footer />
    </>
  );
}


export default App;