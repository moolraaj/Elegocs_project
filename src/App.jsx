 
import {  Route, Routes } from 'react-router-dom';
import './App.css';
 
import Homepage from "./pages/Home/Homepage";
import Navbar from './common/Navbar';
import AboutPage from './pages/About/AboutPage';
 
 
 
 

function App() {
  return (
    <>
     <Navbar/>
    <Routes>
      <Route path='/' element={ <Homepage/>}/>
      <Route path='/about' element={ <AboutPage/>}/>
    </Routes>
   
    
    </>
  );
}

export default App;
