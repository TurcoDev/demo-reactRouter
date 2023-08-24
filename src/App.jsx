import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Orders from "./components/Orders";
import Users from "./components/Users";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Conditional from "./components/Conditional";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/conditional/" element={<Conditional />} />
        <Route path="/dashboard/" element={<Dashboard />} >
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
