import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import {NavigationBar} from './components/NavigationBar';
import { Home } from './components/Home';


function App() {
  return (
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;