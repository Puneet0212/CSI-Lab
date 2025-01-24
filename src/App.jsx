import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Members, Projects, Publications, Openings, Contact, Navbar, StarsCanvas } from "./components";
import {AllesRebelPortfolio, ChanghoonSungPortfolio} from "./components/Portfolios"


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className='relative z-0 mt-3'>
          <StarsCanvas />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/openings" element={<Openings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/alles-rebel-portfolio" element={<AllesRebelPortfolio />} /> 
            <Route path="/changhoon-sung-portfolio" element={<ChanghoonSungPortfolio />} /> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
