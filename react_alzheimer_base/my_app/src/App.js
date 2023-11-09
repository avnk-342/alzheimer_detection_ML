
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import Prediction from './Pages/Prediction';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/prediction' element={<Prediction/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
