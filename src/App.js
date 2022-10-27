import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Auth from './Auth';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import ErrorPage from './ErrorPage';



function App() {
  return (

    <Router>
      <Routes>
        <Route path="/"  element={<Auth/>}/>
        <Route path="/sign-up"  element={<SignUp/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/home"  element={<Home/>}/>
        <Route path="*"  element={<ErrorPage/>}/>
      </Routes>
    </Router>
    
  )
}

export default App;
