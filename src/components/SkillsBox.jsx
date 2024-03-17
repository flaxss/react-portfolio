import React from 'react'

const SkillsBox = ({list}) => {
  return (
    <div className={`h-[90px] w-[90px] flex justify-center items-center ${list.color ? list.color: 'bg-tertiary'} rounded-md shadow-lg hover:opacity-75 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out`}>
        <img src={list.icon} alt="" />
    </div>
  )
}

export default SkillsBox