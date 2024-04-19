import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Css/Style1.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from './firebase'


const Login = () => {
        const[email, setEmail] = useState('')
        const[passward, setPassward] = useState('')
        const handleSubmit = async (e) => {
            e.preventDefault()
            try {
                await signInWithEmailAndPassword(auth, email,passward)
                console.log("Logged in Successfully")
            } catch(err) {
                console.log(err)
            }
        }

    return(
        <div className='Login-container'>
            <form className='Login-form' onSubmit={handleSubmit}>
                <h2>Login </h2>
                <label htmlFor='email' className='header-lebel1'>
                    Email:
                    <input type='text' id='email' onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label htmlFor='password' className='header-lebel1'>
                    Password:
                    <input type='password' id='password' onChange={(e) => setPassward(e.target.value)}/>
                </label>
                <button type='submit'>Login</button> <br/>
                <p className='login-lebel'>Don&apos;t have an Acount <Link to="/SignUpForm">sign up</Link></p>
               

            </form>
        </div>
    );
    
};

export default Login;