import React, { useEffect, useRef, useState } from 'react'
import { checkValidData, checkValidName } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../utils/redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [signUpMode, setSignUpMode] = useState(false);
    const [validationError, setValidationError] = useState(null);
    const user = useSelector((store) => store.user.users);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(user.length > 0){
            navigate('/browse')
         }
    }, [])
    const dispatch = useDispatch();
    const handleSignUpMode = () => {
        if (signUpMode) {
            setSignUpMode(false);
        }
        else {
            setSignUpMode(true);
        }
    }
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();

        const validData = checkValidData(email.current.value, password.current.value);
        setValidationError(validData);
        if (validData) return;

        if (!signUpMode) {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                    dispatch(loginUser({ name: user.providerData[0].displayName, id: user.uid, email: user.email }));
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setValidationError(errorCode + " - " + errorMessage + " Invalid Credentials")
                });
        } else {
            const validName = checkValidName(name.current.value)
            setValidationError(validName);
            if (validName) return;
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then(async (userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    let updateProfileValue = await updateProfile(auth.currentUser, {
                        displayName: name.current.value
                    })
                    dispatch(loginUser({ name: user.displayName, email: user.email, id: user.uid }))
                    navigate("/browse");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setValidationError(errorCode + " - " + errorMessage)
                    // ..
                });
        }
    }
    return (
        <div className="w-full max-w-xs mx-auto">
            <form className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 text-white bg-opacity-75" onSubmit={handleSubmit}>
                <p className='text-2xl mt-4 mb-4'>{signUpMode ? 'Sign Up' : "Sign In"}</p>
                {signUpMode && (
                    <div className="my-8">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="name" ref={name} type="text" placeholder="Name" />
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
                        {signUpMode ? 'Create Account' : "Sign In"}
                    </button>
                </div>

                <p className='my-8 cursor-pointer' onClick={handleSignUpMode}>{signUpMode ? 'Go Back to Sign-in page' : "New to Netflix? Sign Up Now"}</p>
            </form>
        </div>
    )
}

export default Login
