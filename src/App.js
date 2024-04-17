import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/projects';
import './App.css';

const App = () => {
  return (
    
      <BrowserRouter>

        
          <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/About' element={<About/>} />
          {/* <Route path='/Projects' element={<Projects/>} /> */}


          </Routes>
        
      </BrowserRouter>
   
     

  );
};

export default App;
