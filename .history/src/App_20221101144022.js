import './App.css';
import Home from './components/admin/home';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Customer from './components/customer/customer';

function App() {
   return (
      <div className="container">
         <Navbar />
         <Route>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/customer' element={<Customer />} />
         </Route>
         <Home />
      </div>
   );
}

export default App;
