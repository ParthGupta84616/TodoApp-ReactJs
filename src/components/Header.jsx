import React from 'react'
import Logo from "../Img/Logo.jpeg";
import gib from "../Img/gib.png";
import link from "../Img/linkedin.png"

function Header() {
  return (
    <>
    <div className="watermark fixed flex top-0 left-0">
        <a href="https://github.com/ParthGupta84616">
            <img
            className='size-16 m-4'
            src={gib} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/parth-guptaji/">
            <img 
            className='size-16 m-4'
            src={link} alt="" />
        </a>
    </div>
    
    <div className='flex items-center justify-center m-8 -mb-8 text-5xl font-bold text-orange-700'>
        <img src={Logo} alt="" 
        className='size-24 m-8 rounded-full'
        />
        <h1>Todo App</h1>

    </div>
    
    </>
  )
}

export default Header