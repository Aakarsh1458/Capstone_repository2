import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/homepage';
import About from './pages/Aboutpage';
import Resources from './pages/Resources';
import Contact from './pages/contact';
import Community from './pages/community';
import Assessment from './pages/Assessment';
import Tips from './pages/Tips';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
    </Router>
  );
}
export default App;