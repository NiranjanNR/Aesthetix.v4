import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import AboutAes from './components/Company/AboutAesthetix/AboutAes';
import Corporate from './components/Verticals/Corporate/Corporate';
import Government from './components/Verticals/Government/Government';
import Education from './components/Verticals/Education/Education';
import Hospitality from './components/Verticals/Hospitality/Hospitality';
import Retail from './components/Verticals/Retail/Retail';
import Culture from './components/Company/Culture/Culture';
import Location from './components/Company/Locations/Location';
import CallSupport from './components/Company/CallSupport/Support';
import Av from './components/Solutions/AudioVisual/Av';
import ITServices from './components/Solutions/ITServices/Services'
import Elv from './components/Solutions/ELT/Elv'; 
import LandingPage from './components/MainPage/LandingPage/LandingPage';
import ProjectProfile from './components/Resources/ProjectProfiles/ProjectProfile';
import Casestudy from './components/Resources/CaseStudies/Casestudy';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutAes />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/government" element={<Government />} />
        <Route path="/education" element={<Education />} />
        <Route path="/hospitality" element={<Hospitality />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/our-people" element={<Culture />} />
        <Route path="/location" element={<Location />} />
        <Route path="/support" element={<CallSupport />} />
        <Route path="/av" element={<Av />} />
        <Route path="/it-service" element={<ITServices />} />
        <Route path="/elv" element={<Elv />} />
        <Route path="/project-files" element={<ProjectProfile />} />
        <Route path="/case-study" element={<Casestudy />} />

      </Routes>
    </Router>
  );
}

export default App;
