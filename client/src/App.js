import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <BrowserRouter>
        {/* <div className="AppBar">
        
            <div className="mobileMenuVersion">
              <span className="firstSpan"></span>
              <span className="secondSpan"></span>
              <span className="thirdSpan"></span>
            </div>
        
            <div className="sectionsMenu">
            <button color="primary"><a href="/admin">Admin</a></button>
            <button color="primary"><a href="/login">Login</a></button>
            <button color="primary"><a href="/registration">Registration</a></button>
            <button color="primary"><a href="/flights">Flights</a></button>
            </div> 
          
      </div>   */}
      <NavBar />
        <div className="RoutePages">
            <AppRouter />
        </div>
      
    </BrowserRouter>
    
  );
}

export default App;
