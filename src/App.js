import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
//import '../src/css/globalStyle.css'
import {NavigationBar} from './components/NavigationBar';
import { Home } from './components/Home';

import { AboutUs } from './components/AboutUs.jsx';

import ContactUs from './components/ContactUs.jsx'
import { Footer } from "./components/Footer.jsx";
import Login from './components/LogIn.jsx';
import DonorRegistration from './components/DonorRegistration.jsx';

import DonateBlood from './components/DonateBlood.jsx';

import { DonorProfile } from "./components/DonorProfile.jsx";

import Admin from "./components/admin/Admin.jsx";

import { DonorEditForm } from "./components/DonorEditForm.jsx";
import { PrivateRoute } from "./components/PrivateRoute.jsx";



function App() {
  return (
    <BrowserRouter>





      <NavigationBar></NavigationBar>
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/log-in" element={<Login />}></Route>
        <Route path="/register" element={<DonorRegistration/>} />
        <Route path="/donate-blood" element={<PrivateRoute><DonateBlood/></PrivateRoute>}></Route>

        <Route path="/donor-profile" element={<PrivateRoute><DonorProfile/></PrivateRoute>}></Route>

        <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>}></Route>

        <Route path="/edit/:email" element={ <PrivateRoute><DonorEditForm></DonorEditForm> </PrivateRoute>}></Route>
      </Routes>


      <Footer />

    </BrowserRouter>
  );
}
export default App;