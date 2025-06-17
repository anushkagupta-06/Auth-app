import { useState } from 'react'
import './App.css'
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import { Routes, Route, Navigate } from "react-router-dom";
import RefreshHandler from './RefreshHandler';

function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false);

  const PrivateRoute = ({element}) => {
    return isAuthenticated ? element : <Navigate to="/login"/>
  }
  return (
    <>
      <div>
        <RefreshHandler setIsAuthenticated={setIsAuthenticated} />         {/* after login if user tries to go to login or signup page from home page he will be directed back to home */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<PrivateRoute element={ <Home/> } />} />
        </Routes>
      </div>
    </>
  )
}

export default App
