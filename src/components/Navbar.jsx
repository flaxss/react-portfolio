import React, { useState } from 'react'
import Sidebar from './Sidebar'
import logo from '../assets/logo.png';
import transparent_logo from '../assets/transparent-logo.png';
import ToggleButton from './ToggleButton';
const Navbar = ({changeMode}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className='text-2xl flex items-center justify-between px-5 md:px-20 h-fit py-5'>
        <div className='w-[150px] h-fit '>
            <a href="/" className='rounded-full'>
                <img className='h-full w-full object-cover bg-gradient-to-b from-tertiary to-secondary px-3 py-1 rounded-full shadow-xl hover:scale-105 transition duration-500 ease-in-out' src={transparent_logo} alt="" />
            </a>
        </div>
        {/* <div>
            <button onClick={changeMode} className='rounded-full bg-secondary px-4 py-1'>Night</button>
        </div> */}
        <div className=''>
            {/* <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className='text-2xl'>
                    &times;
            </button> */}
            {!isSidebarOpen && <ToggleButton isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />}
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={() => setIsSidebarOpen(!isSidebarOpen)} />
        </div>
    </div>
  )
}

export default Navbar