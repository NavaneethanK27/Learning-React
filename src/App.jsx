import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Navbar';
import Course from './course';
import HTML from './assets/image1.png' 
import HTML1 from './assets/image.png'

import Footer from './Footer';
function App() {
 

  return (
     <>
     <Course name="HTML" price="199" image={HTML}/>
     <Course name="food" price="200" image={HTML1}/>
     <Course/>
    </>
  );
}

export default App
