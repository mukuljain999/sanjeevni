//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { NavigationBar } from './components/NavigationBar';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
