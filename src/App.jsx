import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Home/index.jsx';
import { Gallery } from './Gallery/index.jsx';
import { Project } from './Project/index.jsx';
import { Breadcrumbs } from './Breadcrumbs/index.jsx';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery/" element={<Gallery />} />
          <Route path="/gallery/:id" element={<Gallery />} />
          <Route path="/gallery/:id/:slug" element={<Project />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
