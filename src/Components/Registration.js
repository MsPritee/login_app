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
                    <div className='bg-white rounded py-7'>
                        <div className="menu ml-11 font-medium">
                        <ul>
                            <li>Recruiter Registration</li>
                            <li>Company Details</li>
                        </ul>
                    </div>
                    <p className='ml-6'> Note: Please fill your details carefully</p>
                    </div>
                </div>

                <div className='form-box  ml-5 mt-6'>
                    <h2 className='font-bold text-2xl '>
                        Recruiter Registration
                    </h2>
                    <div className='registration-form flex gap-10 mt-5 mx-9 rounded '>
                        <div className='left-side-box  flex flex-col m-6 ml-9'>
                            <div className='name-box flex my-5'>
                                <div className='name_title'>
                                    <label htmlFor="country">Country</label>
                                    <div id='name-title' className='name-title  ' >
                                        <select className='name-title pl-3' id="country" name="country" >
                                            <option value="usa">Select</option>
                                            <option value="usa">Mrs.</option>
                                            <option value="canada">Miss.</option>
                                            <option value="canada">Ms.</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='name-box '>
                                    <label >Name</label>
                                    <input id="name" className='name-input ' type='text' placeholder='Name' />
                                </div>
                            </div>
                            <div className='company-email mb-5'>
                                <label >Company Email ID</label>
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
                                <button className='bg-gray-100 mt-3  py-2.5 px-4 rounded hover:bg-slate-300 hover:text-black hover:font-bold '>
                                    Cancel
                                </button>
                            </div>

                        </div>
                        <div className='right-side-box flex flex-col m-6'>
                            <div className='company-detail flex gap-4 my-5'>
                                <div className='company-name'>
                                    <label >Company Name</label>
                                    <input id='company-input' className='company-name w-8' type='text' placeholder='Enter Company Name' />
                                </div>
                                <div className='designation'>
                                    <label >Designation</label>
                                    <input id='company-input' className='w-8' type='text' placeholder='Enter Designation' />
                                </div>
                            </div>
                            <div className='personal-email'>
                                <label >Personal Email ID</label>
                                <input className='' type='text' placeholder='Enter Personal Email ID' />
                            </div>
                            <div className='personal-detail flex gap-4 my-5'>
                                <div id="select-country">
                                    <label htmlFor="country">Country:</label>
                                    <select id="country" name="country pl-6">
                                        <option value="">Select</option>
                                        <option value="usa">USA</option>
                                        <option value="canada">India</option>
                                        <option value="canada">Canada</option>
                                    </select>
                                </div>
                                <div id="mobile">
                                    <label htmlFor="mobileNumber">Mobile Number</label>
                                    <input type="tel" id="mobileNumber" className='' name="mobileNumber" />
                                </div>
                            </div>

                            <div className='continue-btn  w-full right-0 '>
                                <button className=' bg-blue-800 text-white mt-3  py-2.5 px-4 rounded hover:bg-slate-300 hover:text-black hover:font-bold '>
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
