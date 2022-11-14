import './App.css';
import Home from './components/admin/home';
import Navbar from './components/navbar';

function App() {
   return (
      <div className="container">
         <Navbar />
         <Home />
      </div>
   );
}

export default App;
