
import React, { useState } from 'react';
import './Registration.css';
import Eye from "./Images/eye1.png"
import logo from "./Images/logo.png";
import Hide from './Images/hide.png';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const cancelBtn = () => {
        navigate('/')
    }


    const continueBtn = () => {

        const saluationSelect = document.getElementById('saluation');
    const nameInput = document.getElementById('name');
    const companyEmailInput = document.querySelector('company-email');
    const passwordInput = document.querySelector('password-input');
    const companyNameInput = document.getElementById('company-name');
        const designationInput = document.querySelector('designation');
    const personalEmailInput = document.querySelector('personal-email');
    const countryInput = document.getElementById('country');
    const mobileNumberInput = document.getElementById('mobileNumber');

    if (
      nameInput.value.trim() === '' ||
      companyEmailInput.value.trim() === '' ||
      passwordInput.value.trim() === '' ||
      companyNameInput.value.trim() === '' ||
      designationInput.value.trim() === '' ||
      personalEmailInput.value.trim() === '' ||
      countryInput.value === '' ||
      mobileNumberInput.value.trim() === ''
    ) {
      window.alert('Please fill in all required fields.');
    } else {
      navigate('/next-page'); 
    }
  }

    
    return (
        <>

            <div className='main relative min-h-screen'>
                <header className='header '>
                    <div className=' left-0  flex items-center h-fit justify-center md:justify-start md:ml-3'>
                        <img className='logo-img h-12 p-1.5 mr-4  ' src={logo} />
                        <h2 className='heading text-2xl text-white font-medium md:text-lg lg:text-lg'><a href='#'>Verified Hiring</a></h2>
                    </div>
                </header>

                <div className=' registration-container flex-1 flex sm:flex-row flex-col '>
                    <div className='left-sidebar form-menu m-3  '>
                        <div className='card h-fit m-2 bg-white first-letter border  '>
                            <h3 className='left-side-head font-medium text-2xl p-3 border-b '>
                                Build Your Profile
                            </h3>
                            <div className=' sidebar-menu rounded py-2  '>
                                <div className="menu ml-6  text-sm md:text-sm   ">
                                    <ul>
                                        <li className='list-item hover:underline cursor-pointer text-blue-600'>
                                            <FontAwesomeIcon className='pr-2' icon={faArrowRight} />Recruiter Registration
                                        </li>
                                        <li>
                                            <FontAwesomeIcon className='pr-2' icon={faArrowRight} />Company Details
                                        </li>
                                    </ul>
                                </div>
                                <p className='ml-4  text-xs font-medium '> Note: Please review your entries carefully before clicking the next button.</p>
                            </div>
                        </div>
                    </div>

                    <div className='form-box ml-2 mr-24  mt-5 border flex-1'>
                        <h2 className='registration font-bold p-3 border-b '>
                            Recruiter Registration
                        </h2>
                        <div >
                            <div className='registration-form font-medium flex  mx-1 rounded '>
                                <div className='left-side-box  flex flex-1 flex-col m-1'>
                                    <div className='name-box  flex gap-2 my-5'>
                                        <div className='name_title  '>
                                            <label htmlFor='saluation'><span className="mandatory-mark">*</span>Saluation</label>
                                            <div id='name-saluation' className='name-title pr-1  ' >
                                                <select className=' saluation pl-2 border rounded mr-1 w-full' id="saluation" required name="title" >
                                                    <option value="">-Select-</option>
                                                    <option value="Mrs.">Mrs.</option>
                                                    <option value="Miss">Miss.</option>
                                                    <option value="Mr">Mr.</option>
                                                    <option value="Dr">Dr.</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='name flex flex-col flex-1 '>
                                            <label ><span className="mandatory-mark">*</span>Name</label>
                                            <input id="name" className='name-input flex-1 w-full ' type='text' required placeholder='Enter Full Name' />
                                        </div>
                                    </div>
                                    <div className='company-email mb-5  flex flex-col'>
                                        <label ><span className="mandatory-mark">*</span>Company Email ID</label>
                                        <input className='company-input' id='company-email' type='text' placeholder='Enter Company Email ID' />
                                    </div>

                                    <div className='password  '>
                                        <label className='mb-2'> <span className="mandatory-mark">*</span>Password </label>
                                        <div className='Pass-container relative '>
                                            <input className='password-input ' type={showPassword ? "text" : "password"} required placeholder='Enter Password' />
                                            <span className="eye h-5 w-5 cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2"
                                                onClick={handleTogglePassword}>
                                                {showPassword ? (
                                                    <img src={Hide} alt="Toggle Password" />
                                                ) : (
                                                        <img src = { Eye } alt = "Toggle Password" />
                                                )}
                                                
                                            </span>
                                        </div>
                                    </div>

                                </div>

                                <div className='right-side-box flex-1 flex flex-col m-1'>
                                    <div className='company-detail justify-between flex gap-4 my-5'>
                                        <div className='company-name flex-auto flex flex-col' >
                                            <label ><span className="mandatory-mark">*</span>Company Name</label>
                                            <input id='company-name' className='  company-name' type='text' placeholder='Enter Company Name' />
                                        </div>
                                        <div className='designation flex-auto flex flex-col'>
                                            <label ><span className="mandatory-mark">*</span>Designation</label>
                                            <input id='designation' className='' type='text' placeholder='Enter Designation' />
                                        </div>
                                    </div>
                                    <div className='personal-email  flex flex-col'>
                                        <label ><span className="mandatory-mark">*</span>Personal Email ID</label>
                                        <input className='i' id='personal-email' type='text' placeholder='Enter Personal Email ID' />
                                    </div>
                                    <div className='personal-detail flex gap-2 my-5 w-full'>
                                        <div className='county-select'>
                                            <label htmlFor="country"><span className="mandatory-mark">*</span>Country</label>
                                            <div id="select-country" className='name-title '>
                                                <select id="country" name="country pl-2">
                                                    <option value="">Select</option>
                                                    <option value="usa">USA</option>
                                                    <option value="canada">India</option>
                                                    <option value="canada">Canada</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div id="mobile" className='flex flex-col flex-auto'>
                                            <label htmlFor="mobileNumber"><span className="mandatory-mark">*</span>Mobile Number</label>
                                            <input type="tel" id="mobileNumber" placeholder='Enter Mobile Number' className='w-full' name="mobileNumber" />
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className='flex flex-row w-full justify-between px-3 pb-2'>
                                <button className='bg-gray-100 border mt-3  py-1.5 px-4 rounded hover:bg-slate-300 hover:text-black hover:font-bold ' onClick={cancelBtn}>
                                            Cancel
                                        </button>
                                <button className=' continue-btn right-0 border border-blue-700 font-medium text-white mt-3 py-2 px-2.5 rounded   ' onClick={continueBtn}>
                                    Continue 
                                        </button>
                                </div>

                           
                        </div>
                    </div>
                </div>

                <footer className='footer sm:bottom-0  absolute bottom-0 w-full h-20 bg-zinc-100 border '>
                    <div className='left-0 text-sm pl-8 flex items-center justify-center md:justify-start  py-6 '>
                        <h4>© Copyright IntegrationWings 2023</h4>
                    </div>
                </footer>
            </div>
        </>
    )
}

