import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AuthenticatedLayout from './components/AuthenticatedLayout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthenticatedLayout />}>
                    <Route index element={<Dashboard />} />
                    {/* Aggiungi altre route se necessario */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
