import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import illustration from '../assets/undrawSharing.svg';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCoins } from 'react-icons/fa';

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
          <div className="text-3xl font-bold">StaffEngine</div>
          <div>
            <button onClick={() => handleScrollToForm('apply')} className="bg-white text-purple-600 py-2 px-4 rounded-full mr-2 text-black">
              Apply
            </button>
            <button onClick={() => handleScrollToForm('hire')} className="bg-white text-purple-600 py-2 px-4 rounded-full text-black">
              Hire 
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col md:flex-row items-center justify-between p-4">
          {/* Text Section */}
          <div className="md:w-2/3 p-4 text-left">
            <h1 className="font-bold mb-4 text-black text-4xl md:text-5xl lg:text-7xl xl:text-[5rem]">Where talent meets opportunity.</h1>
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
            className={`py-2 px-6 border-l border-t border-r ${activeTab === 'apply' ? 'bg-purple-600 text-white border-b-0' : 'text-black bg-white'}`}
            style={{ borderRadius: '0' }}
            onClick={() => setActiveTab('apply')}
          >
            Apply
          </button>
          <button
            className={`py-2 px-6 border-l border-t border-r ${activeTab === 'hire' ? 'bg-purple-600 text-white border-b-0' : 'text-black bg-white'}`}
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

      {/* Footer */}
      <footer className="bg-purple-600 text-white py-6">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-4">
                {/* Social Icons Div */}
                <div className="flex justify-center items-center space-x-6 p-3 text-left">
                    <a href="#" aria-label="Facebook" className="hover:text-gray-300">
                        <FaFacebookF size={24} />
                    </a>
                    <a href="#" aria-label="Twitter" className="hover:text-gray-300">
                        <FaTwitter size={24} />
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-gray-300">
                        <FaInstagram size={24} />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
                        <FaLinkedinIn size={24} />
                    </a>
                </div>
                
                {/* Coin Icon and Refer Friend Text */}

                <div className="flex justify-center items-center space-x-3 p-3 text-center">
                    <FaCoins size={56} />
                    <p className="text-gray-400 text-lg">Refer a friend!</p>
                    <button className="bg-transparent hover:bg-purple-900 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
                        REWARDS
                    </button>
                </div>
                
                {/* Roles Filled Div */}
                <div className="flex justify-end flex-col items-center p-3 text-center">
                    <p className="text-gray-400 text-xl">Roles Filled</p>
                    <h1 className="text-7xl font-bold text-white" style={{ fontWeight: 700 }}>1,500</h1>
                </div>
            </div>

            <div className="mt-4 text-center">
                <p>© 2024 StaffEngine. All rights reserved.</p>
            </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
