import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

import Dashboard from './components/Dashboard'; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* Redirect all other routes to /dashboard */}
                <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
