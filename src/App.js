import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './components/contexts/Theme'; 
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SignUpForm from './components/SignUpForm';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <div id='top' className={`${themeName} app`}>
      <BrowserRouter>

        
          <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/SignUpForm' element={<SignUpForm/> } />
          <Route path='/portafolio' element={<Home/> } />
          <Route path='/About' element={<About/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/Skills' element={<Skills/>} />
          <Route path='/Header' element={<Header/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/ScrollToTop' element={<ScrollToTop/>} />
          <Route path='/Footer' element={<Footer/>} />


          </Routes>
        
      </BrowserRouter>
   
     </div>

  );
};

export default App;
