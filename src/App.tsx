import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import AboutAes from './components/Company/AboutAesthetix/AboutAes';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/about" element={<AboutAes />} />
      </Routes>
    </Router>
  );
}

export default App;
