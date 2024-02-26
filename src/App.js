import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from '../src/LogIn/LogIn';
import SignUp from '../src/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="*" element={<LogIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
