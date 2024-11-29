import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './Sign-in/Sign-in';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;