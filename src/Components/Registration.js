
import React from 'react'
import './Registration.css'
import Eye from "./Images/eye1.png"
import logo from "./Images/logo.png";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Registration = () => {
    return (
        <>
            
            <div className='main relative min-h-screen'>
                <header className='bg-blue-600  '>
                    <div className=' left-0  flex items-center h-fit justify-center md:justify-start md:ml-24'>
                        <img className='logo-img h-12 mr-2 ' src={logo} />
                        <h2 className='heading text-2xl text-slate-200 font-medium md:text-lg lg:text-xl xl:text-2xl'>Verified Hiring</h2>
                    </div>
                </header>

                <div className=' registration-container flex-1 flex sm:flex-row flex-col '>
                    <div className='left-sidebar form-menu m-3  '>
                        <div className='card h-fit m-2 bg-white first-letter border  '>
                            <h3 className='text-2xl font-bold p-3 md:text-lg lg:text-xl  border-b '>
                                Build Your Profile
                            </h3>
                            <div className=' rounded py-2 '>
                                <div className="menu ml-6   text-base md:text-sm  lg:text-sm ">
                                    <ul>
                                        <li className='list-item hover:underline cursor-pointer'>
                                            <FontAwesomeIcon className='pr-2' icon={faArrowRight} />Recruiter Registration
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='pr-2' icon={faArrowRight} />Company Details
                                        </li>
                                    </ul>
                                </div>
                                <p className='ml-4   '> Note: Please fill your details carefully</p>
                            </div>
                        </div>
                    </div>

                    <div className='form-box ml-2 mr-16  mt-5 border flex-1'>
                        <h2 className=' text-xl font-bold p-3  lg:text-xl  border-b '>
                            Recruiter Registration
                        </h2>

                        <div className='registration-form font-medium flex gap-2 :gap-6  mx-1 rounded '>
                            <div className='left-side-box  flex flex-auto flex-col m-1'>
                                <div className='name-box  flex gap-1 my-5'>
                                    <div className='name_title  '>
                                        <label htmlFor="country">Saluation</label>
                                        <div id='name-title' className='name-title pr-1  ' >
                                            <select className='name-title pl-2   border-solid border-gray-100 rounded mr-1 w-32 border-2 h-10' id="title" name="title" >
                                                <option value="">-Select-</option>
                                                <option value="Mrs.">Mrs.</option>
                                                <option value="Miss">Miss.</option>
                                                <option value="Ms">Ms.</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='name-box flex flex-col flex-1 '>
                                        <label >Name</label>
                                        <input id="name" className='name-input flex-1 w-full ' type='text' placeholder='Name' />
                                    </div>
                                </div>
                                <div className='company-email mb-5  flex flex-col'>
                                    <label >Company Email ID</label>
                                    <input className='company-input' type='text' placeholder='Company' />
                                </div>

                                <div className='password  '>
                                    <label className='mb-2'> Password </label>
                                    <div className='Pass-container relative '>
                                        <input className='password-input ' type='password' placeholder='Password' />
                                        <span className="eye h-5 w-5 cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2" >
                                            <img src={Eye} alt="Toggle Password" />
                                        </span>
                                    </div>
                                </div>

                                <div className='cancel-btn w-full'>
                                    <button className='bg-gray-100 mt-8  py-2.5 px-4 rounded hover:bg-slate-300 hover:text-black hover:font-bold '>
                                        Cancel
                                    </button>
                                </div>

                            </div>

                            <div className='right-side-box flex-auto flex flex-col m-1'>
                                <div className='company-detail justify-between flex gap-4 my-5'>
                                    <div className='company-name flex-auto flex flex-col' >
                                        <label >Company Name</label>
                                        <input id='company-input' className='  company-name' type='text' placeholder='Enter Company Name' />
                                    </div>
                                    <div className='designation flex-auto flex flex-col'>
                                        <label >Designation</label>
                                        <input id='company-input' className='' type='text' placeholder='Enter Designation' />
                                    </div>
                                </div>
                                <div className='personal-email  flex flex-col'>
                                    <label >Personal Email ID</label>
                                    <input className='i' type='text' placeholder='Enter Personal Email ID' />
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

                <footer className='footer sm:bottom-0  absolute bottom-0 w-full h-20 bg-zinc-400 '>
                    <div className='left-0  flex items-center justify-center md:justify-start md:ml-24  py-6 '>
                        <h4>© Copyright IntegrationWings 2023</h4>
                    </div>
                </footer>
            </div>
        </>
    )
}

