import React from 'react'

const TechBox = ({stack}) => {
  return (
    <div className='flex flex-col items-center'>
        <div className={`h-[90px] w-[90px] p-5 flex justify-center items-center bg-secondary rounded-md shadow-lg hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out`}>
            <img src={stack.icon} alt="" className={`h-full w-full object-cover ${stack.color ? stack.color : ''}`}/>
        </div>
        <p className='text-center mt-2'>{stack.title}</p>
    </div>
  )
}

export default TechBox