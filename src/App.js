
import Carousels from './components/Carousels';

import { Footer } from './components/Footer';

//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import ContactUs from './components/ContactUs.jsx'


function App() {
  return (
    <BrowserRouter>




      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/contact-us" element={<ContactUs/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>


  );
}
export default App;
