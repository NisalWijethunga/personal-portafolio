import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import './App.css';

const App = () => {
  return (
    
      <BrowserRouter>

        
          <Routes>
            
            <Route path='/About' element={<About/>} />


          </Routes>
        
      </BrowserRouter>
      // <h1>hi</h1>
     

  );
};

export default App;
