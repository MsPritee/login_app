import React from 'react';
import logo from "./Images/1.webp"
import Person from "./Images/UN.png"
import Eye from "./Images/eye1.png"
import Key from "./Images/key.png"
import './Login.css'

const Login = () => {
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
                                <label className='mb-2'> Company Email</label>
                                <div className="email-input-container">
                                    <span className="person  h-5 w-5" >
                                        <img src={Person} />
                                    </span>
                                    <input className='username-input' type='text' placeholder='Username' />
                                </div>

                            </div>

                            <div className='input-container'>
                                <label className='mb-2'> Password </label>
                                <div className='Password-container'>
                                    <span className="key h-5 w-5 ">
                                        <img src={Key} />
                                    </span>
                                    <input className='password-input' type='password' placeholder='Password' />
                                    <span className="eye h-5 w-5 mr-3" >
                                        <img src={Eye} alt="Toggle Password" />
                                    </span>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2 my-2 w-full'>
                                <button className='forgot-btn cursor-pointer font-bold' >Forgot Password</button>
                                <button className='submit-btn cursor-pointer' type='submit' >Sign In</button>
                            </div>

                        </form>
                    </div>
                    <p className=' mt-3 font-bold'>Don't Have Verified Hiring Accout ? Register Now</p>
                    <button className='cancel-btn font-bold my-5 cursor-pointer' type='submit' >Cancel</button>
                </div>
            </div>

        </>
    )
}

export default Login;