import React from 'react'
import Logo from "../Img/Logo.jpeg";
import gib from "../Img/gib.png";
import link from "../Img/linkedin.png";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase';
function Header() {
  
  const handleGoogle = async (e) =>{
    const provider = await  new GoogleAuthProvider();
    return signInWithPopup(auth , provider)
  }
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
    
    <div className="flex justify-center ">
      <div className="flex items-center justify-center m-8 -mb-8 text-5xl font-bold text-orange-700 w-3/4">
        <img src={Logo} alt="" className="w-24 h-24 m-8 rounded-full" />
        <h1>Todo App</h1>
      </div>
      <div className="flex items-center relative justify-end m-8 -mb-8 text-xl font-bold text-orange-700 w-1/4">
        <button onClick={handleGoogle} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign/Login With Google</button>  
      </div>

    </div>


    
    </>
  )
}

export default Header