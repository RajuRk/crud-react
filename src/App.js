import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/Adduser';
import Edituser from './components/Edituser';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/adduser" element={<AddUser/>}/>
          <Route path="/edituser/:id" element={<Edituser/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
