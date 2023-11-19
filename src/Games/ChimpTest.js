import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import {FaMailchimp} from 'react-icons/fa'; // Chimp Icon

import Info from '../components/Info';
import TestScreen from '../components/TestScreen';
import ChimpTiles from '../components/ChimpTiles';

function ChimpTest()
{
    const chimpTest = {
        icon: <FaMailchimp className='w-24 h-24 p-1' />,
        title: 'CHIMP TEST',
        play: '',
        description: 'Click the dissapearing squares in their sequential number order. Click to start.'
    }

    const [showStart, setShowStart] = useState(true);
    const [showTest, setShowTest] = useState(false);
    const [tileCount, setTileCount] = useState(4);
    

    function Start()
    {
        setShowStart(false);
        setShowTest(true);
    }

    function Test()
    {

    }

    

    return (
        <>
            <Navbar />
            {showStart && (
                <div onClick={Start}><TestScreen test={chimpTest}/></div>
            )}
            <div>
                {showTest && (
                    <div className='mt-[60px] h-[35rem] p-5 cursor-pointer bg-theme-blue flex flex-col items-center justify-center'>
                        <ChimpTiles tileCount={tileCount}/>
                    </div>
                )}
            </div>
            
        </>
    );
}

export default ChimpTest;