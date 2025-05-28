import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Stories from './pages/Stories';
import Poetry from './pages/Poetry';
import Recommendations from './pages/Recommendations';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/poetry" element={<Poetry />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;