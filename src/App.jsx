import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.css';
import { Home } from './Home/index.jsx';
import { Gallery } from './Gallery/index.jsx';
import { Breadcrumbs } from './Breadcrumbs/index.jsx';

const Project = React.lazy(() =>
  import("./Project").then(module => ({ default: module.Project }))
);

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Breadcrumbs />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/rd_portfolio/" element={<Home />} />
            <Route path="/rd_portfolio/gallery/" element={<Gallery />} />
            <Route path="/rd_portfolio/gallery/:id" element={<Gallery />} />
            <Route path="/rd_portfolio/gallery/:id/:slug" element={<Project />} /> 
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
