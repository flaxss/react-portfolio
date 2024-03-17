import React, { useEffect } from 'react';
import ToggleButton from './ToggleButton';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    useEffect(() => {
        if (!isSidebarOpen) {
            document.body.style.overflow = 'visible';
        } else {
            document.body.style.overflow = 'hidden';
        }
    })
    return (
        <div className={`text-white fixed top-0 left-0 z-50 w-full h-full bg-tertiary transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
            {/* <button onClick={closeSidebar} className="absolute top-0 right-0 py-5 px-5 md:px-20">
                &times;
            </button> */}
            <div className='absolute top-0 right-0 py-5 px-5 md:px-20'>
                <ToggleButton isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            </div>
            <div className='flex flex-col h-[100vh] justify-center items-start mt-10 w-full p-4'> {/* Adjusted for full width and added padding */}
                <ul className="w-full flex flex-col justify-center items-center gap-4">
                    <li className="text-center w-full py-2 text-4xl text-white hover:bg-secondary">
                        <a href="">Skills</a>
                    </li>
                    <li className="text-center w-full py-2 text-4xl text-white hover:bg-secondary">
                        <a href="">Experience</a>
                    </li>
                    <li className="text-center w-full py-2 text-4xl text-white hover:bg-secondary">
                        <a href="">Projects</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
