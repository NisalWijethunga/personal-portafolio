import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

const App = () => {
  return (
    
      <BrowserRouter>

        
          <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/About' element={<About/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/Skills' element={<Skills/>} />


          </Routes>
        
      </BrowserRouter>
   
     

  );
};

export default App;
