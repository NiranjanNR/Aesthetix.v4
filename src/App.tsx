import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import AboutAes from './components/Company/AboutAesthetix/AboutAes';
import Corporate from './components/Verticals/Corporate/Corporate';
import Government from './components/Verticals/Government/Government';
import Education from './components/Verticals/Education/Education';
import Hospitality from './components/Verticals/Hospitality/Hospitality';
import Retail from './components/Verticals/Retail/Retail';
import ProjectProfile from './components/Resources/ProjectProfiles/ProjectProfile';
import Casestudy from './components/Resources/CaseStudies/Casestudy';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/about" element={<AboutAes />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/government" element={<Government />} />
        <Route path="/education" element={<Education />} />
        <Route path="/hospitality" element={<Hospitality />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/ProjectFiles" element={<ProjectProfile />} />
        <Route path="/CaseStudy" element={<Casestudy />} />

      </Routes>
    </Router>
  );
}

export default App;
