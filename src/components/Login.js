import React, { useState } from 'react'

const Login = () => {
    const [signUpMode, setSignUpMode] = useState(false);
    const handleSignUpMode = () => {
        if(signUpMode){
            setSignUpMode(false);
        }
        else{
            setSignUpMode(true);
        }
    }
    return (
        <div className="w-full max-w-xs mx-auto">
            <form className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 text-white bg-opacity-75">
                <p className='text-2xl mt-4 mb-4'>{signUpMode ?  'Sign Up' : "Sign In"}</p>

                {signUpMode && (
                    <div className="my-8">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                </div>
                )}
                <div className="my-8">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email Address" />
                </div>
                
                <div className="my-8">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    {signUpMode ?  'Create Account' : "Sign In"}
                    </button>
                </div>

                <p className='my-8 cursor-pointer' onClick={handleSignUpMode}>{signUpMode ?  'Go Back to Sign-in page' : "New to Netflix? Sign Up Now"}</p>
            </form>
        </div>
    )
}

export default Login
