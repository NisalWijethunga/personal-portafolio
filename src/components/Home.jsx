import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';


const Home = () => (
    
        <div>
            <Header />
            <main>
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
  
);

export default Home;