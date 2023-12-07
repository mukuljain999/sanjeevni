
import Carousels from './components/Carousels';

import { Footer } from './components/Footer';

//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { NavigationBar } from './components/NavigationBar';


function App() {
  return (
    <BrowserRouter>

      
    

      <NavigationBar></NavigationBar>
      <Carousels></Carousels>
     
      <Footer/>
    </BrowserRouter>


  );
}
export default App;
