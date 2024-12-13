// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormDetails from './FormDetails';
import PaymentPage from './PaymentPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormDetails />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
};

export default App;