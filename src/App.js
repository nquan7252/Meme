import logo from './logo.svg';
import './App.css';
import Image from './Components/Image';
import { useEffect,useState } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Item from './Item';
function App() {

  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}>
    </Route>
    <Route path='/id' element={<Item/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
