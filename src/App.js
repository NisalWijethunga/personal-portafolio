
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    
      <BrowserRouter>

        
          <Routes>
            
            <Route path='/About' element={<About/>} />


          </Routes>
        
      </BrowserRouter>
     

  );
};

export default App;
