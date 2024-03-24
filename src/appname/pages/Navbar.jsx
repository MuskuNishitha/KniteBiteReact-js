import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import {Home} from '../pages/Home'
import './index.css'
import{Menu} from '../pages/Menu'
import {About} from '../pages/About'
import {Franchise} from './Franchise'
import logo from '../images/logoo.png'
export const Navbar = () => {
  return (
   <>
   <BrowserRouter>
   <Navbar1 />
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/memu' element={<Menu />}></Route>
    <Route path='/Franchise' element={<Franchise />}></Route>
   </Routes>
   
   </BrowserRouter>
   </>
  )
}

let Navbar1=()=>{
    return(
        <>
        <div id="flexnavbar">
        <div id="navbar">
   <div>
    <img src={logo} style={{height:"100px",width:"200px"}} alt='error'></img>
</div>
<div id="links">
       <Link to="/" className='link'>Home</Link>
        <Link to="/about"  className='link'>About</Link>
        <Link to="/memu"  className='link'>Menu</Link>
        <Link to="/Franchise"  className='link'>Franchise</Link> 
</div>
 </div>
 </div>  
        </>
    )
}