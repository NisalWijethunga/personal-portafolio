import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Header from './Header';


const Home = () => (
    
        <div>
            <Header />
           
            <main>
                <About />
                <Projects />
                <Skills />
            </main>
            
        </div>
  
);

export default Home;