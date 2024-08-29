import React from 'react';
// import './App.css';
import Nav from './components/navcomponent/Nav'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/HomeComponent/home';
import Footer from './components/footer/footer';
import Login from './Loginpage/loginpage';
import VideoContnet from './components/videocontent/videocontent';


function App() {
  return (
      <div className=' bg-[#00040E] overflow-hidden'>

     

        <BrowserRouter >
        <Nav/>
            <Routes>
              <Route path='/'   element={<Home/>} />
              <Route path='/testimonials' element={<>hello</>} />
              <Route path='/FAQ' element={<Home/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/videocontent' element={<VideoContnet/>} />

            </Routes>

        </BrowserRouter>

        <Footer/>

        
 
          
      </div>
  );
}

export default App;
