import React, { useRef, useState } from 'react'
import IntroductoryContent from './IntroductoryContent';
import AboutContent from './AboutContent';
import SkillsContent from './SkillsContent';
import ProjectContent from './ProjectContent';

const Content = () => {

    const targetDiv = useRef(null);

    const focusDiv = () => {
        // Check if the ref.current is not null
        if (targetDiv.current) {
            targetDiv.current.focus();
        }
    };
    return (
        <div className='min-h-[100vh] h-fit px-5 md:px-20'>
            <IntroductoryContent focusDiv={focusDiv} />

            {/* about */}
            <AboutContent />
            {/* others */}
            <div className="bg-secondary rounded h-fit px-10 py-10 text-justify">
                <h1 className='text-3xl font-bold text-tertiary'>Background</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint sit reprehenderit enim neque! Exercitationem labore nam pariatur nesciunt accusantium. Sunt temporibus ad ipsa doloremque ex facilis obcaecati rem quibusdam eos. Quod itaque reiciendis velit, perferendis maiores ipsa autem debitis accusantium eius voluptate recusandae unde, eaque rerum qui totam consequatur.</p>
            </div>

            {/* skills */}
            <SkillsContent />

            {/* projects */}
            {/* <ProjectContent /> */}

        </div>
    )
}

export default Content