import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carousels from './components/Carousels';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/slider'>Donor Registraion</Route>
      </Routes>
      <Carousels></Carousels>
    </BrowserRouter>
  );
}
export default App;
