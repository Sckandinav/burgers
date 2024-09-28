import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CartPage from './pages/Cart';

import './App.css';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <footer>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
