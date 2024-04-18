import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Header from './Header';
import Contact from './Contact';


const Home = () => (
    
        <div>
            <Header />
           
            <main>
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
            
        </div>
  
);

export default Home;