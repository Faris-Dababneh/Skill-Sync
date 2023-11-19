/*
This component appears at each test
*/ 

import React from 'react';

const TestScreen = ({ test }) => {

    return (
        <div className='mt-[60px] h-[35rem] p-5 cursor-pointer bg-theme-blue flex flex-col items-center justify-center'>
            {test.icon}
            <div className='text-6xl items-center justify-center'> 
                {test.title}
            </div>
            <div className='max-w-[28rem] p-5 text-xl overflow-x-auto text-center justify-center flex flex-col'>
                {test.description}
            </div>
        </div>
    );
}

export default TestScreen;