import React, { useRef, useState } from 'react'
import SkillsBox from './SkillsBox';
import IntroductoryContent from './IntroductoryContent';
import AboutContent from './AboutContent';

const Content = () => {
    const [list, setList] = useState([
        {
            skill: 'ReactJS',
            icon: '',
            color: 'bg-green-800'
        },
        {
            skill: 'NodeJS',
            icon: '',
            color: 'bg-yellow-400'
        },
        {
            skill: 'PHP',
            icon: '',
            color: ''
        },
        {
            skill: 'CSS',
            icon: '',
            color: 'bg-pink-400'
        },
        {
            skill: 'HTML',
            icon: '',
            color: 'bg-orange-700'
        },
    ])

    const targetDiv = useRef(null);

    const focusDiv = () => {
        // Check if the ref.current is not null
        if (targetDiv.current) {
            targetDiv.current.focus();
        }
    };
    return (
        <div className='min-h-[100vh] h-fit px-2 md:px-20'>
            <IntroductoryContent focusDiv={focusDiv} />

            {/* about */}
            <AboutContent />
            {/* others */}
            <div className="bg-secondary rounded h-fit px-10 py-10 text-justify">
                <h1 className='text-3xl font-bold text-tertiary'>Background</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint sit reprehenderit enim neque! Exercitationem labore nam pariatur nesciunt accusantium. Sunt temporibus ad ipsa doloremque ex facilis obcaecati rem quibusdam eos. Quod itaque reiciendis velit, perferendis maiores ipsa autem debitis accusantium eius voluptate recusandae unde, eaque rerum qui totam consequatur.</p>
            </div>

            {/* projects */}
            {/* <div className="rounded min-h-fit h-[100vh]"></div> */}

            {/* skills */}
            <div className="flex items-center justify-center h-screen">
                <div ref={targetDiv} tabIndex={-1} className="grid grid-cols-5 gap-2 place-content-center">
                    {list.map((list, index) => (
                        <div key={index} className="flex justify-center flex-wrap">
                            <SkillsBox list={list} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Content