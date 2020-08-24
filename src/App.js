import React from 'react';
import './App.css';
import { ProvideFirebase } from './firebase/useFirebase';
import { Router } from '@reach/router';
import Auth from './pages/Auth';
import AllTeeth from './pages/AllTeeth';
import SingleTooth from './pages/SingleTooth';

function App() {
  return (
    <ProvideFirebase>
      <Router>
        <Auth path="/" />
        <AllTeeth path="/teeth" />
        <SingleTooth path="/teeth/:toothId" />
      </Router>
    </ProvideFirebase>
  );
}

export default App;
