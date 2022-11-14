import './App.css';
import Home from './components/admin/home';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Customer from './components/customer/customer';

function App() {
   return (
      <div className="container">
         <Navbar />
         <Routes>
            <Route exact path='/admin' element={<Home />} />
            <Route exact path='/' element={<Customer />} />
         </Routes>
      </div>
   );
}

export default App;
