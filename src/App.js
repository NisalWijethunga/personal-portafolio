import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import './App.css';

const App = () => {
  return (
    
      <BrowserRouter>

        
          <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/About' element={<About/>} />


          </Routes>
        
      </BrowserRouter>
   
     

  );
};

export default App;
