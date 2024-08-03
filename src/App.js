import React from 'react'
import Navbar from './Components/Navbar'
import Caraosel from './Components/Caraosel'
import WelcomePage from './Components/WelcomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar />
            <Caraosel />
            <WelcomePage />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App