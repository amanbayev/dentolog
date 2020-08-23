import React from 'react';
import './App.css';
import { ProvideFirebase } from './firebase/useFirebase';
import { Router } from '@reach/router';
import Auth from './pages/Auth';

function App() {
  return (
    <ProvideFirebase>
      <Router>
        <Auth path="/" />
      </Router>
    </ProvideFirebase>
  );
}

export default App;
