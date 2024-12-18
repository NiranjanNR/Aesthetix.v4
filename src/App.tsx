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
import CaseStudy1 from './components/Resources/Study/CaseStudy1';
import CaseStudy2 from './components/Resources/Study/CaseStudy2';
import CaseStudy3 from './components/Resources/Study/CaseStudy3';
import Careers from './components/Company/CallSupport/CareerSupport';

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
        <Route path="/careers" element={<Careers />} />

        <Route path="/av" element={<Av />} />
        <Route path="/it-service" element={<ITServices />} />
        <Route path="/elv" element={<Elv />} />
        <Route path="/project-files" element={<ProjectProfile />} />
        <Route path="/case-study" element={<Casestudy />} />
        <Route path="/case-studies/youth-hub" element={<CaseStudy1 />} />
        <Route path="/case-studies/smart-dubai" element={<CaseStudy3 />} />
        <Route path="/case-studies/gems-edu" element={<CaseStudy2 />} />
      </Routes>
    </Router>
  );
}

export default App;
