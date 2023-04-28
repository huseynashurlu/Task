import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RepoIssues from './components/RepoIssues';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/">
            <RepoIssues />
          </Route>
          <Route path="/user/:username">
            <UserProfile />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;