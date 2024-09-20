import './App.css'
import Corporate from './components/Corporate/Corporate';
import Culture from './components/Company/Culture/Culture';
import Nav from './components/Nav/Nav';
import AboutAes from './components/Company/AboutAesthetix/AboutAes';
import CallSupport from './components/Company/CallSupport/Support';
import Location from './components/Company/Locations/Location';
import ProjectProfile from './components/Resources/ProjectProfiles/ProjectProfile';
import Casestudy from './components/Resources/CaseStudies/Casestudy';

function App() {
  return (
    <>
      <Nav />
      {/* <AboutAes /> */}
      {/* <Corporate /> */}
      {/* <Location /> */}
      {/* <CallSupport /> */}
      {/* <Culture /> */}
      {/* <ProjectProfile /> */}
      <Casestudy />
    </>
  )
}

export default App
