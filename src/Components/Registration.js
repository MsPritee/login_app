import React from 'react'
import './Registration.css'
import Eye from "./Images/eye1.png"

export const Registration = () => {
    return (
        <>
            <div className=' registration-container flex h-full min-h-screen'>
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
                        <div className='left-side-box relative  flex flex-col m-6 ml-9'>
                            <div className='name-box justify-between flex gap-1 my-5'>
                                <div className='name_title  '>
                                    <label htmlFor="country">Title</label>
                                    <div id='name-title' className='name-title pr-1  ' >
                                        <select className='name-title pl-2   border-solid border-gray-100 rounded mr-1 w-32 border-2 h-10' id="title" name="title" >
                                            <option value="">Select</option>
                                            <option value="Mrs.">Mrs.</option>
                                            <option value="Miss">Miss.</option>
                                            <option value="Ms">Ms.</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='name-box flex flex-col flex-auto'>
                                    <label >Name</label>
                                    <input id="name" className='name-input w-full ' type='text' placeholder='Name' />
                                </div>
                            </div>
                            <div className='company-email mb-5'>
                                <label >Company Email ID</label>
                                <input className='company-input' type='text' placeholder='Company' />
                            </div>
                            <div className='password'>
                                <label className='mb-2'> Password </label>
                                <div className='Password-container relative w-full  '>
                                    <input className='password-input' type='password' placeholder='Password' />
                                    <span className="eye h-5 w-5 right-0 absolute cursor-pointer" >
                                        <img className='right-0' src={Eye} alt="Toggle Password" />
                                    </span>
                                </div>
                            </div>
                            <div className='cancel-btn'>
                                <button className='bg-gray-100 mt-3  py-2.5 px-4 rounded hover:bg-slate-300 hover:text-black hover:font-bold '>
                                    Cancel
                                </button>
                            </div>

                        </div>
                        <div className='right-side-box flex flex-col m-6 mr-9'>
                            <div className='company-detail justify-between flex gap-4 my-5'>
                                <div className='company-name flex-1  flex flex-col' >
                                    <label >Company Name</label>
                                    <input id='company-input' className='  company-name' type='text' placeholder='Enter Company Name' />
                                </div>
                                <div className='designation flex-2 flex-col'>
                                    <label >Designation</label>
                                    <input id='company-input' className='' type='text' placeholder='Enter Designation' />
                                </div>
                            </div>
                            <div className='personal-email'>
                                <label >Personal Email ID</label>
                                <input className='' type='text' placeholder='Enter Personal Email ID' />
                            </div>
                            <div className='personal-detail flex gap-1 my-5 w-full'>
                                <div className='county-select'>
                                    <label htmlFor="country">Country</label>
                                    <div id="select-country" className='name-title pr-1'>
                                        <select id="country" name="country pl-2">
                                        <option value="">Select</option>
                                        <option value="usa">USA</option>
                                        <option value="canada">India</option>
                                        <option value="canada">Canada</option>
                                    </select>
                                </div>
                                </div>
                                <div id="mobile" className='flex flex-col flex-auto'>
                                    <label htmlFor="mobileNumber">Mobile Number</label>
                                    <input type="tel" id="mobileNumber" className='w-full' name="mobileNumber" />
                                </div>
                            </div>

                            <div className='continue-btn  w-full  '>
                                <button className=' bg-blue-800 text-white mt-3 py-2.5 px-4 rounded hover:bg-slate-300 hover:text-black hover:font-bold '>
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
