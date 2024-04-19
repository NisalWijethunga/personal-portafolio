import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Css/Style.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from './firebase'


const SignUpForm = () => {
        const[email, setEmail] = useState('')
        const[passward, setPassward] = useState('')
        const handleSubmit = async (e) => {
            e.preventDefault()
            try {
                await createUserWithEmailAndPassword(auth, email,passward)
                console.log("Account created")
            } catch(err) {
                console.log(err)
            }
        }

    return(
        <div className='signup-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label htmlFor='email' className='header-lebel'>
                    Email:
                    <input type='text' id='email' onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label htmlFor='password' className='header-lebel1'>
                    Password:
                    <input type='password' id='password' onChange={(e) => setPassward(e.target.value)}/>
                </label>
                <button type='submit'>Sign Up</button><br/>
                <p className='login-lebel'>Already Registered <Link to="/login" className='login'>Login</Link></p>
               

            </form>
        </div>
    );
    
};

export default SignUpForm;
