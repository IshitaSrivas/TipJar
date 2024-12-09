import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MintContent from './pages/MintContent';
import TipContent from './pages/TipContent';
import ViewContentPage from './pages/ViewContentPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mint" element={<MintContent />} />
                <Route path="/tip" element={<TipContent />} />
                <Route path="/view" element={<ViewContentPage />} />
            </Routes>
        </Router>
    );
}

export default App;
