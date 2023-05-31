import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import CartList from './pages/Cart/CartList';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/carts' element={<CartList/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>   
  );
}

export default App;
