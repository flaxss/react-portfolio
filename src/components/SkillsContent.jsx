import React from 'react'
import TechBox from './TechBox';

import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import bootstrapIcon from '../assets/bootstrap.png';
import jsIcon from '../assets/js.png';
import reactJsIcon from '../assets/react.png'
import nodeJsIcon from '../assets/nodejs.png';
import phpIcon from '../assets/php.png';
import mongoDbIcon from '../assets/mongodb.png';
import mySqlIcon from '../assets/mysql.png';
import expressJsIcon from '../assets/express.png';
import codeigniterIcon from  '../assets/codeigniter.png';

const SkillsContent = () => {
    
    const stacks = [
        {
            title: 'HTML',
            icon: htmlIcon,
        },
        {
            title: 'CSS',
            icon: cssIcon,
        },
        {
            title: 'Bootstrap',
            icon: bootstrapIcon,
        },
        {
            title: 'Javascript',
            icon: jsIcon,
        },
        {
            title: 'ReactJs',
            icon: reactJsIcon,
        },
        {
            title: 'NodeJs',
            icon: nodeJsIcon,
        },
        {
            title: 'PHP',
            icon: phpIcon,
        },
        {
            title: 'MongoDB',
            icon: mongoDbIcon,
        },
        {
            title: 'MySQL',
            icon: mySqlIcon,
        },
        {
            title: 'ExpressJs',
            icon: expressJsIcon,
        },
        {
            title: 'Codeigniter 3',
            icon: codeigniterIcon,
            color: 'bg-white'
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen h-fit py-10">
            <h1 className='text-4xl font-bold mb-6'>Tech Stack</h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {stacks.map((stack, index) => (
                    <TechBox key={index} stack={stack} />
                ))}
            </div>
        </div>
    )
}

export default SkillsContent