import React, { useRef, useState } from 'react'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
    const [signUpMode, setSignUpMode] = useState(false);
    const [validationError, setValidationError] = useState(null);
    const handleSignUpMode = () => {
        if(signUpMode){
            setSignUpMode(false);
        }
        else{
            setSignUpMode(true);
        }
    }
    const email = useRef(null);
    const password = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(password.current.value);
        const validData = checkValidData(email.current.value, password.current.value);
        setValidationError(validData);
        if(validData) return;

        if(!signUpMode){
           //
        }else{
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              console.log(user);
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setValidationError(errorCode+" - "+errorMessage)
              // ..
            });
        }
    }
    return (
        <div className="w-full max-w-xs mx-auto">
            <form className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 text-white bg-opacity-75" onSubmit={handleSubmit}>
                <p className='text-2xl mt-4 mb-4'>{signUpMode ?  'Sign Up' : "Sign In"}</p>
                {signUpMode && (
                    <div className="my-8">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                </div>
                )}
                <div className="my-8">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="email" ref={email} type="text" placeholder="Email Address" />
                </div>
                
                <div className="my-8">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" ref={password} type="password" placeholder="Password" />
                </div>
                {validationError ? (<div className='text-red-500 mb-2'>{validationError}</div>) : null}
                <div className="flex items-center justify-between">
                    <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    {signUpMode ?  'Create Account' : "Sign In"}
                    </button>
                </div>

                <p className='my-8 cursor-pointer' onClick={handleSignUpMode}>{signUpMode ?  'Go Back to Sign-in page' : "New to Netflix? Sign Up Now"}</p>
            </form>
        </div>
    )
}

export default Login
