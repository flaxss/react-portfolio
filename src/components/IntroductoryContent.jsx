import React from 'react'
import FileIcon from '@mui/icons-material/AttachFile';

const IntroductoryContent = ({focusDiv}) => {
    return (
        <div className='min-h-[100vh] max-h[500px] h-fit flex flex-col justify-center items-center -mt-10'>
            <div className='px-5 flex justify-center items-center flex-col md:block transition duration-600'>
                <p className='text-sm md:text-2xl'>Hello, I am</p>
                <p className='text-2xl md:text-5xl text-tertiary'>Jefferson Regencia</p>
                <p className='text-lg md:text-3xl'>Experienced in Building</p>
                <p className='text-lg md:text-3xl'>Web application with <span className='text-tertiary'>MERN</span> Stack</p>
                <p className='text-sm md:text-lg text-tertiary'>A Backend Developer</p>
            </div>

            <div className='mt-5 flex gap-2'>
                <button
                    onClick={() => { window.open('https://drive.google.com/file/d/1H_D7WrcDuWcDxS9EIzL-fL97kTDdqPXj/view?usp=drive_link') }}
                    className='rounded-full px-5 py-2 bg-primary border border-tertiary hover:bg-tertiary hover:border transition duration-500'
                >
                    <FileIcon />Resume
                </button>
                <button className='rounded-full px-5 py-2 bg-white text-primary border border-tertiary hover:text-white hover:bg-primary hover:border transition duration-500'>Contact</button>
                {/* <button onClick={focusDiv} className='rounded px-3 py-1 border hover:bg-tertiary'>Tech Stack</button> */}
            </div>
        </div>
    )
}

export default IntroductoryContent