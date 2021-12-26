// import logo from './logo.svg';

import Admin from './pages/dashboard/admin'
import Index from './pages/dashboard/index'
import AboutUs from './pages/dashboard/aboutUs'
import LoginUser from './pages/dashboard/loginUser'
import RegisterUser from './pages/dashboard/registerUser'

import './App.css';

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Index />}>
            </Route>
            <Route path="/admin" element={<Admin/>}>
            </Route>
            <Route path="/aboutus" element={<AboutUs/>}>
            </Route>
            <Route path="/login" element={<LoginUser/>}>
            </Route>
            <Route path="/register" element={<RegisterUser/>}>
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
