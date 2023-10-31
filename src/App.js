
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Section from './Section';

import About from './About';
import Article from './Article'
import  Form  from './Form';





function App() {
  return (
    <div className='App'>
      <div>
      

    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/7931719/books-clipart-md.png" alt='logo' width={100} height={100}></img>
</div>
<div>


            
</div>

      <Header />
      <Navbar />
      <Article />
    <Section />
    <About />
      <div>
      <Form />
      </div>
      
      <Footer />
     
      
    </div>
  );
}

export default App;
