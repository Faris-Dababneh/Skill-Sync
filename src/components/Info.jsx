/*
This component appears under each test, showing a graph of user data
and an about section describing the test.
*/ 

import React from 'react';
import {BsKeyboardFill} from 'react-icons/bs'; // Typing test
import {FaMailchimp} from 'react-icons/fa'; // Chimp Test
import {BsSpeedometer2} from 'react-icons/bs'; // Reaction Time

const Info = ({ test }) => {
    const icons = {
        reaction: <BsSpeedometer2 className='w-16 h-16 p-1'/>,
        chimp: <FaMailchimp className='w-16 h-16'/>,
        type: <BsKeyboardFill className='w-16 h-16'/>
    };

    return (
        <div className='flex flex-row items-center justify-center mt-10'>
            <div className='flex flex-col bg-background-color w-[30rem] h-[20rem] drop-shadow-lg rounded-sm m-5'>
                <h1 className='text-4xl mt-5 ml-5 text-theme-blue'>About</h1>
                <p className='p-5'>{test.description}</p>
            </div>
            <div className='flex flex-col bg-background-color w-[30rem] h-[20rem] drop-shadow-lg rounded-sm m-5'>
                <h1 className='text-4xl mt-5 ml-5 text-theme-blue'>Statistics</h1>
                <div className='p-5'>{test.stats}</div>
            </div>
        </div>
    );
}

export default Info;