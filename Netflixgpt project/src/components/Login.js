import React, { useState } from 'react'
import Header from './Header';

function Login() {
  const [isIn,setIsIn] =useState(true);
  const toggleSign=()=>{
      setIsIn(!isIn);
  }
  return (
    <div className='w-full h-full'>
        <Header/>
        <div className='absolute'>
        <img className='' src='https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_medium.jpg' alt='background' />
      </div>

            <form className='absolute flex flex-col justify-center items-center bg-black bg-opacity-70 w-1/5 h-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
             <h1 className='text-white text-3xl font-bold '>{isIn? "Sign In" : "Sign Up" }</h1>
             {!isIn && <input type="text" placeholder='Enter Username' className='font-bold p-4 mt-5 border border-black w-11/12 bg-black text-white bg-opacity-50 rounded-md' />}

              <input type="text" placeholder='Email or Mobile number' className='font-bold p-4 mt-5 border border-black w-11/12 bg-black text-white bg-opacity-50 rounded-md' />
              <input type="password" placeholder='Password' className='font-bold p-4 mt-5 border border-black w-11/12 bg-black text-white bg-opacity-50 rounded-md' />
              <button className='bg-red-600 p-2 m-4 text-white text-xl w-3/12 rounded-md flex justify-center items-center'>{isIn? "Sign In" : "Sign Up" }</button>


              <p className='text-white py-2 cursor-pointer font-bold hover:opacity-70 ' onClick={toggleSign}> {isIn? "New to Netflix ? Sign Up Now." : "Already Signed ? Sign Up" }</p>
            </form> 

       

      
    </div>
  )
}

export default Login;