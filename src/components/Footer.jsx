import React from 'react'

const Footer = () => {
    return (
        <div className='min-h-[26vh] h-fit bg-secondary px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-5'>
            <div className=''>
                <h1>Links</h1>
                <div className='flex gap-2'>
                    <a className='bg-primary px-3 py-1 rounded-full' href="">Linkedin</a>
                    <a className='bg-primary px-3 py-1 rounded-full' href="">Email</a>
                    <a className='bg-primary px-3 py-1 rounded-full' href="">Linkedin</a>
                </div>
            </div>
            <div className=''>
                <h1>Links</h1>
            </div>
            <div className=''>
                <h1>Links</h1>
            </div>
            <div className=''>
                <h1>Links</h1>
            </div>
        </div>
    )
}

export default Footer