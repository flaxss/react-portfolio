import React from 'react'

const ToggleButton = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className='text-4xl hover:scale-150 transition duration-200 ease-in-out'>
            &times;
        </button>
    )
}

export default ToggleButton