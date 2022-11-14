import './App.css';
import Home from './components/admin/home';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
   return (
      <div className="container">
         <Navbar />
         <Home />
      </div>
   );
}

export default App;
