import { useRef, useState } from 'react';
import checkValidData from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {  profileURL } from "../utils/Contants";
import {  useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const navigate = useNavigate();

    const [isSigninForm ,setisSigninForm]  = useState(true);
    const [errorMessage, seterrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const dispatch = useDispatch();

    const OnSubmit = () => {    
           const message = checkValidData(email.current.value,password.current.value);
           seterrorMessage(message);

           
        if (message) return;

        if (!isSigninForm) {
            //sign up logic 
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: profileURL,
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL
                            }));

                             navigate("/");

                        // eslint-disable-next-line no-unused-vars
                        }).catch((error) => {
                            // An error occurred
                            // ...
                        });

                    // console.log(user);

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    seterrorMessage(errorCode + "-" + errorMessage);

                });
        }
        else {
            // sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    // eslint-disable-next-line no-unused-vars
                    const user = userCredential.user;
                    // console.log(user);
                    navigate("/");

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    seterrorMessage(errorCode + "-" + errorMessage);
                });
        }

    }
    
    const toggleSignupForm = () => {
        setisSigninForm(!isSigninForm);

        
    }


    
    return (
           <div className="bg-blue-200 h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-80">
                <h2 className="text-2xl text-blue-600 font-semibold mb-6">{isSigninForm ? "Login" : "Sign Up"}</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    { 
                     !isSigninForm && 
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm text-gray-700">Username</label>
                        <input type="text" ref={name} id="email" name="text" className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring focus:ring-blue-400" required />
                    </div>
                    }
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm text-gray-700">Email</label>
                        <input type="email" ref={email} id="email" name="email" className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring focus:ring-blue-400" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm text-gray-700">Password</label>
                        <input ref={password} type="password" id="password" name="password" className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring focus:ring-blue-400" required />
                    </div>
                    <button onClick={OnSubmit} type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">{isSigninForm ? "Login" : "Sign Up"}</button>
                    <p className='text-red-500 font-light'> {errorMessage} </p>
                    <p className="m-2 cursor-pointer" onClick={toggleSignupForm} >
                        {isSigninForm ? "Don't have account! Sign up now" : "If Already a user Login."}
                    </p>
                </form>
            </div>
        </div>
    )
 
   
}

export default LoginForm;


    {/* <form onSubmit={(e) => e.preventDefault()}
     className="absolute flex flex-col w-full  md:w-5/12 my-20 mx-96  text-white p-12 bg-blue-300 bg-opacity-80 rounded-xl"
     >
     <h1 className="font-extrabold text-3xl py-4 m-2">
       {isSigninForm ? "Sign In" : "Sign Up"}
     </h1>
     {
        !isSigninForm && <input
        type="text"
       
        placeholder="UserName"
        className="p-4 m-2 w-full  bg-white"
    />
    }
         <input
       
            type="text"
            placeholder="Email Address"
             className="p-4 m-2 w-full  bg-white"
         />
         <input
            
              type="password"
              placeholder="Password"
             className="p-4 m-2 w-full  bg-white"
          />
         <p className="text-red-500 font-bold text-lg py-2 m-2">  </p>
         <button  className="p-4 m-2 bg-violet-600 rounded-lg w-full">{isSigninForm ? "Sign In" : "Sign Up"}</button>
         <p className="m-2 cursor-pointer" onClick={toggleSignupForm} >
         {isSigninForm ? "New to netflix? Sign Up Now" : "If Already a user sign in."}
         </p>
        </form> */}