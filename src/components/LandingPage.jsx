import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import illustration from '../assets/undrawSharing.svg'

const LandingPage = () => {
    const [activeTab, setActiveTab] = useState('apply');

    const handleScrollToForm = (tab) => {
        setActiveTab(tab);
        scroll.scrollTo(document.getElementById('form-section').offsetTop);
    };

    return (
        <>
            <div className="min-h-screen bg-purple-600 text-white flex flex-col">
                {/* Top Bar */}
                <div className="flex justify-between items-center p-4">
                    <div className="text-3xl font-bold" >StaffEngine</div>
                    <div>
                        <button onClick={() => handleScrollToForm('apply')} className="bg-white text-purple-600 py-2 px-4 rounded-full mr-2 text-black">Apply</button>
                        <button onClick={() => handleScrollToForm('hire')} className="bg-white text-purple-600 py-2 px-4 rounded-full text-black">Hire</button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-1 flex-col md:flex-row items-center justify-between p-4">
                    {/* Text Section */}
                    <div className="md:w-2/3 p-4 text-left">
                    <h1 className="font-bold mb-4 text-black" style={{ fontSize: '5rem' }}>Where talent meets opportunity.</h1>
                    <p className="text-xl mb-4 mt-4">
                        Our founder, with extensive HR experience, has successfully matched top talent with leading companies globally. At StaffEngine, we connect exceptional candidates with outstanding employers for perfect long-term fits.
                    </p>
                    <p className="text-xl">
                        Whether advancing your career or hiring the best, trust our expertise. Discover how we can help you achieve your goals.
                    </p>
                    
                    </div>

                    {/* Illustration Section */}
                    <div className="md:w-1/3 p-4">
                        <img src={illustration} alt="StaffEngine Illustration" className="max-w-full h-auto" />
                    </div>
                </div>
            </div>
            {/* Form Section */}
            <div id="form-section" className="min-h-screen bg-white text-black p-8">
                <div className="tabs flex border-b border-gray-300">
                    <button
                        className={`py-2 px-6 border-l-3 border-t-3 border-r-3 border-b-0 border-gray-300 ${activeTab === 'apply' ? 'bg-purple-600 text-white border-b-0' : 'text-black bg-white'}`}
                        style={{ borderRadius: '0' }}
                        onClick={() => setActiveTab('apply')}
                    >
                        Apply
                    </button>
                    <button
                        className={`py-2 px-6 border-l-3 border-t-3 border-r-3 border-b-0 border-gray-300 ${activeTab === 'hire' ? 'bg-purple-600 text-white border-b-0' : 'text-black bg-white'}`}
                        style={{ borderRadius: '0' }}
                        onClick={() => setActiveTab('hire')}
                    >
                        Hire
                    </button>
                </div>
                <div className="tab-content bg-white p-8 rounded-b text-left border-l border-r border-b border-gray-300">
                    {activeTab === 'apply' && (
                        <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apply-name">
                                Name (*)
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                                id="apply-name"
                                type="text"
                                placeholder="Your Name"
                            />
                            </div>
                            <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apply-email">
                                Email (*)
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                                id="apply-email"
                                type="email"
                                placeholder="Your Email"
                            />
                            </div>
                            <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apply-phone">
                                Telephone
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                                id="apply-phone"
                                type="tel"
                                placeholder="Your Telephone"
                            />
                            </div>
                            <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apply-file">
                                Resume (*)
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                                id="apply-file"
                                type="file"
                            />
                            </div>
                            <div className="md:col-span-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apply-address">
                                Home Address
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                                id="apply-address"
                                type="text"
                                placeholder="Your Home Address"
                            />
                            </div>
                            <div className="md:col-span-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apply-description">
                                Role Description
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                                id="apply-description"
                                placeholder="Describe the role you are applying for"
                            />
                            </div>
                        </div>
                        <button className="bg-purple-600 text-white py-2 px-4 w-full rounded-full" type="submit">
                            Submit
                        </button>
                        </form>
                    )}
                    {activeTab === 'hire' && (
                        <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hire-company-name">
                                Company Name (*)
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                                id="hire-company-name"
                                type="text"
                                placeholder="Company Name"
                            />
                            </div>
                            <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hire-contact-email">
                                Contact Email (*)
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                                id="hire-contact-email"
                                type="email"
                                placeholder="Contact Email"
                            />
                            </div>
                            <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hire-contact-phone">
                                Contact Telephone
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                                id="hire-contact-phone"
                                type="tel"
                                placeholder="Contact Telephone"
                            />
                            </div>
                            <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hire-file">
                                Company Profile
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                                id="hire-file"
                                type="file"
                            />
                            </div>
                            <div className="md:col-span-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hire-address">
                                Company Address
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                                id="hire-address"
                                type="text"
                                placeholder="Company Address"
                            />
                            </div>
                            <div className="md:col-span-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hire-description">
                                Role Description
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                                id="hire-description"
                                placeholder="Describe the role you are hiring for"
                            />
                            </div>
                        </div>
                        <button className="bg-purple-600 text-white py-2 px-4 w-full rounded-full" type="submit">
                            Submit
                        </button>
                        </form>
                    )}
                </div>
            </div>
        </>
        
    );
}

export default LandingPage;
