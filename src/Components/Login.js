import React, { useState } from 'react';
import logo from "./Images/logo.png";
import Person from "./Images/UN.png"
import Eye from "./Images/eye1.png"
import Key from "./Images/key.png"
import Hide from "./Images/hide.png"
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = (()=>{
        setShowPassword(!showPassword);

    })
    const navigate = useNavigate();

    const signInBtn = () => {
        const companyEmailInput = document.querySelector('company-email');
        const passwordInput = document.querySelector('password-input');

        if (
            companyEmailInput.value.trim() === '' ||
            passwordInput.value.trim() === '' 
         
              
            ) {
                window.alert('Please fill in all required fields.');
            } else {
                navigate('/next-page');
            }
    }

    return (
        <>
            <div className='login-container mx-auto  '>
                <div className='login-box rounded  px-8 py-12 '>
                    <div className='items-center mt-3 flex flex-col'>
                        <img className='logo-img  h-20 mb-2' src={logo} />
                        <h2 className='heading-text mb-6 text-2xl font-bold'>Recruiter Login</h2>
                    </div>
                    <div>
                        <form>
                            <div className='input-container'>
                                <label className='mb-2'><span className="mandatory-mark">*</span> Company Email</label>
                                <div className="email-input-container">
                                    <span className="person  h-5 w-5" >
                                        <img src={Person} />
                                    </span>
                                    <input id='company-email' required className='username-input' type='text' placeholder='Username' />
                                </div>

                            </div>

                            <div className='input-container'>
                                <label className='mb-2'><span className="mandatory-mark">*</span> Password </label>
                                <div className='Password-container'>
                                    <span className="key h-5 w-5 ">
                                        <img src={Key} />
                                    </span>
                                    <input id='password-input' required className='password-input' type={showPassword ? "text" : "password"} placeholder='Password' />
                                    <span className="eye h-5 w-5 mr-3" onClick={handleTogglePassword}>
                                        {showPassword ? (
                                            <img src={Hide} alt="Hide Password" />
                                        ): (
                                                <img src={Eye} alt="Show Password" />
                                        )}                                       

                                    </span>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2 my-2 w-full'>
                                <button className='forgot-btn cursor-pointer font-bold' >Forgot Password</button>
                                <button className='submit-btn cursor-pointer' onClick={signInBtn} type='submit' >Sign In</button>
                            </div>

                        </form>
                    </div>
                    <p className=' mt-3 font-bold'>Don't Have Verified Hiring Accout ?
                        <Link to="/registration" className='hover:text-lime-600 hover:underline text-blue-800'> Register Now</Link> 
                    </p>
                    <button className='cancel-btn font-bold my-5 cursor-pointer' type='submit' >Cancel</button>
                </div>
            </div>

        </>
    )
}

export default Login;