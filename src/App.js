import React from 'react';
import './App.css';
import { ProvideFirebase } from './firebase/useFirebase';
import { Router } from '@reach/router';
import Auth from './pages/Auth';
import AllTeeth from './pages/AllTeeth';

function App() {
  return (
    <ProvideFirebase>
      <Router>
        <Auth path="/" />
        <AllTeeth path="/teeth" />
      </Router>
    </ProvideFirebase>
  );
}

export default App;
