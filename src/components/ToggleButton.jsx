import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';;

const ToggleButton = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className='text-4xl hover:scale-150 transition duration-200 ease-in-out'>
            {!isSidebarOpen ? <MenuIcon /> : <CloseIcon />}
            
        </button>
    )
}

export default ToggleButton