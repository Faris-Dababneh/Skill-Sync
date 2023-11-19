import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import TestScreen from '../components/TestScreen';

import {BsKeyboardFill} from 'react-icons/bs'; // Typing test

function TypeTest()
{
    const [words, setWords] = useState([]);
    const [showStart, setShowStart] = useState(true);
    const [showTest, setShowTest] = useState(false);

    useEffect(() => {

    }, []);


    const test = () => {
        
        return (
            <input type='text' className='w-[50rem] h-[10rem]'/>
        );
        }

    const typeTest = {
        icon: <BsKeyboardFill className='w-24 h-24 p-1' />,
        title: 'TYPING TEST',
        description: 'Find your typing speed in words per minute. Click to start.'
    }

    function Start()
    {
        setShowStart(false);
        setShowTest(true);
    }


    return (
        <>
            <Navbar />
            {showStart && (
                <div onClick={Start}><TestScreen test={typeTest}/></div>
            )}
            <div>
                {showTest && (
                    <div className='mt-[60px] h-[35rem] p-5 cursor-pointer bg-theme-blue flex flex-col items-center justify-center'>
                        
                    </div>
                )}
            </div>
        </>
    );
}

export default TypeTest;