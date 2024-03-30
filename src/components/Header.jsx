import React, { useState } from 'react';
import Logo from "../Img/Logo.jpeg";
import gib from "../Img/gib.png";
import link from "../Img/linkedin.png";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase';


function Header({ info }) {
  const [check, setCheck] = useState(null);

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setCheck(result);
      console.log(check);
      info(result); // Call info function with the result after setting the state
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
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
      <div className="flex items-center justify-center md:m-8 md:-mb-8 md:text-5xl text-xl font-bold text-orange-700 md:w-3/4 mt-20 ">
        <img src={Logo} alt="" className="md:w-24 md:h-24 md:m-8 rounded-full w-14 h-14 mr-2" />
        <h1>Todo App</h1>
      </div>
      {
        check? (
          <div className="flex items-center relative justify-end md:m-8 md:-mb-8 md:text-3xl font-bold text-orange-400 md:w-1/4 mt-20 w-1/4">
            {/* <img src={check.user.photoURL} alt={check.user.displayName} className="w-10 h-10 rounded-full mr-2" /> */}
            <h1>{check.user.displayName}</h1>
          </div>
        ):
        (
          <div className="flex items-center relative justify-end md:m-8 md:-mb-8 md:text-xl font-bold text-orange-700 md:w-1/4 mt-20 w-1/3">
        <button onClick={handleGoogle} className="bg-blue-500 text-white px-4 py-2 ml-20 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign/Login</button>  
      </div>
        )
      }

    </div>


    
    </>
  )
}

export default Header