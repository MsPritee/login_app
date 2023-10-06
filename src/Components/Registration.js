import React from 'react'
import './Registration.css'
import Eye from "./Images/eye1.png"

export const Registration = () => {
    return (
        <>
            <div className=' registration-container flex h-full '>
                <div className='left-sidebar form-menu'>
                    <h3 className='text-2xl font-bold mt-12 mb-8 ml-7'>
                        Build Your Profile
                    </h3>
                    <div className="menu ml-11">
                        <ul>
                            <li>Recruiter Registration</li>
                            <li>Company Details</li>
                        </ul>
                    </div>
                    <p className='ml-6'> Note: Please fill your details carefully</p>
                </div>

                <div className='form-box  ml-5 mt-6'>
                    <h2 className='font-bold text-2xl '>
                        Recruiter Registration
                    </h2>
                    <div className='registration-form flex gap-10 mt-5 '>
                        <div className='left-side-box  flex flex-col'>
                            <div className='name-box flex my-5'>
                                <div className='name-title'>
                                        <label htmlFor="country">Country</label>
                                        <select className='mx-2 border-solid border-slate-950' id="country" name="country" >
                                        <option value=""> { "           "}      </option>
                                            <option value="usa">Select.</option>
                                            <option value="usa">Mrs.</option>
                                            <option value="canada">Miss.</option>
                                            <option value="canada">Ms.</option>
                                        </select>
                                </div>
                                <div className='name-box '>
                                    <label htmlFor="country">Name</label>
                                    <input id="name" className='name-input w-40' type='text' placeholder='Name' />
                                </div>
                            </div>
                            <div className='company-email mb-5'>
                                <input className='company-input' type='text' placeholder='Company' />
                            </div>
                            <div className='password'>
                                <label className='mb-2'> Password </label>
                                <div className='Password-container '>
                                    <input className='password-input' type='password' placeholder='Password' />
                                    <span className="eye h-5 w-5 mr-3" >
                                        <img src={Eye} alt="Toggle Password" />
                                    </span>
                                </div>
                            </div>
                            <div className='cancel-btn'>

                            </div>

                        </div>
                        <div className='right-side-box flex flex-col'>
                            <div className='company-detail'>

                            </div>
                            <div className='personal-email'>

                            </div>
                            <div className='personal-detail'>
                                <div>
                                    <label htmlFor="country">Country:</label>
                                    <select
                                        id="country"
                                        name="country"
                                    >
                                        <option value="">Select a country</option>
                                        <option value="usa">USA</option>
                                        <option value="canada">India</option>
                                        <option value="canada">Canada</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="mobileNumber">Mobile Number:</label>
                                    <input
                                        type="tel"
                                        id="mobileNumber"
                                        name="mobileNumber"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
