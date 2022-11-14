import './App.css';
import Home from './components/admin/home';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Customer from './components/customer/customer';
import Test from './components/test/test'
import Index from './components/linked';
function App() {
   return (
      <div className="container">
         <Navbar />
         <Routes>
            <Route exact path='/' element={<Customer />} />
            <Route exact path='/admin' element={<Home />} />
            <Route exact path='/test' element={<Test />} />
            <Route exact path='/linked' element={<Index />} />
         </Routes>
      </div>
   );
}

export default App;
