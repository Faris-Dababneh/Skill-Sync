import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import TestScreen from '../components/TestScreen';
import {Md123} from 'react-icons/md'; // Number Memory
import ProgressBar from '../components/ProgressBar';

import { getNumberTestScores, uploadNumberTestScores } from '../Server/Database';
import { useNavigate } from "react-router-dom";

import Info from '../components/Info';

import Stats from '../components/Stats';

function NumberTest()
{
    const navigate = useNavigate();

    const testInfo = {
        description: <p>How many long of a number can you memorize?<br/><br/>Most people can only remember 7 digit numbers, but with certain techniques, this can be greatly improved.<br/></p>,
        stats: <Stats props={'NumberMemory'}/>
    };

    const numberTest = {
        icon: <Md123 className='w-32 h-32 p-1' />,
        title: 'NUMBER MEMORY TEST',
        play: '',
        description: 'Remember increasingly long numbers. Click to start.'
    }

    const [showStart, setShowStart] = useState(true);
    const [showTest, setShowTest] = useState(false);

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function Start()
    {
        setShowStart(false);
        setShowTest(true);
    }

    function Test()
    {
        const [level, setLevel] = useState(0);

        const [lowerBound, setLowerBound] = useState(1);
        const [upperBound, setUpperBound] = useState(9);
        
        let random = getRandomNumber(lowerBound, upperBound);
        const [number, setNumber] = useState(random);
        const [timeOver, setTimeOver] = useState(false);

        const [correct, setCorrect] = useState(false);
        const [incorrect, setIncorrect] = useState(false);

        const [showInput, setShowInput] = useState(false);

        const [time, setTime] = useState(2);

        const [answer, setAnswer] = useState(0);


        const check = () =>
        {
            if (answer == number)
            {
                setCorrect(true);
                setShowInput(false);

                setLowerBound(lowerBound * 10);
                setUpperBound(upperBound * 10);

                setLevel(level + 1);
            }
            else
            {
                setIncorrect(true);
                setShowInput(false);
            }
        }

        const saveScore = () => {
            uploadNumberTestScores(level);
            navigate('/dashboard')
        }

        const restart = () => {
            setCorrect(false);
            setIncorrect(false);
            setShowInput(false);
            setShowStart(true);
            setShowTest(false);
            navigate('/number-test')
        }
    
        const nextLevel = () => {
            setCorrect(false);
            setIncorrect(false);
            setShowInput(false);
            setTimeOver(false);

            setTime(time + 1);

            if (level === 1)
            {   
                setLowerBound(10);
                setUpperBound(90);
            }
                
            let random = getRandomNumber(lowerBound, upperBound);
            setNumber(random)
            
        }

    
        useEffect(() => {
            const intervalId = setInterval(() => {
                // {time} is dictated by level. After {time} time, call another function for the screen to prompt user for the number shown
                setTimeOver(true);
                setShowInput(true);
            }, time * 1000);

            return () => {
                clearInterval(intervalId);
            };
        });


        return (
            <div className='w-full h-full justify-center flex flex-col text-center align-center items-center'>
                {!timeOver && (
                    <>
                        <h1 className='text-8xl mb-4'>{number}</h1>
                        <ProgressBar time={time}/>
                    </>
                )}
                {timeOver && (
                    <div className='text-center flex flex-col'>
                        {showInput && (
                            <>
                            {!correct && (
                                <>
                                {!incorrect && (
                                    <>
                                        <h1 className='text-4xl mb-5'>ENTER THE NUMBER</h1>
                                        <input type='text' className='w-[40rem] h-[5rem] bg-[#0f4daa] mb-5 rounded-md text-5xl p-1 text-center shadow-[2px_2px_5px_#111]' autofocus onChange={event => setAnswer(event.target.value)}/>
                                        <button className='h-[3rem] border-solid border-tile border-[3px] rounded-md text-xl hover:border-tile-hover' onClick={check}>SUBMIT</button>
                                    </>
                                )}
                                    
                                </>
                            )}
                            </>
                        )}
                        
                        {correct && (
                            <div className='text-center flex flex-col'>
                                <h1 className='text-3xl mb-2'>NUMBER</h1>
                                <p className='text-4xl text-green-500 mb-3'>{number}</p>
                                <h1 className='text-3xl mb-2'>YOUR ANSWER</h1>
                                <p className='text-4xl text-green-500 mb-5'>{answer}</p>
                                <h1 className='text-5xl mb-5'>LEVEL {level}</h1>
                                <button className='h-[3rem] border-solid border-tile border-[3px] rounded-md text-xl hover:border-tile-hover' onClick={nextLevel}>NEXT</button>
                            </div>
                        )}

                        {incorrect && (
                            <div className='text-center flex flex-col'>
                            <h1 className='text-3xl mb-2'>NUMBER</h1>
                            <p className='text-4xl text-green-500 mb-3'>{number}</p>
                            <h1 className='text-3xl mb-2'>YOUR ANSWER</h1>
                            <p className='text-4xl text-red-500 mb-5'>{answer}</p>
                            <h1 className='text-5xl mb-5'>LEVEL {level}</h1>
                            <div className='flex flex-row'>
                                <button className='bg-background-color w-[9rem] h-[3rem] m-3 text-lg text-[#2ad463] hover:bg-[#2ad463] hover:text-background-color' onClick={saveScore}>SAVE SCORE</button>
                                <button className='bg-background-color w-[9rem] h-[3rem] m-3 text-lg text-red-600 hover:bg-red-600 hover:text-background-color' onClick={restart}>RESTART</button>
                            </div>
                            
                        </div>
                        )}
                    </div>
                )}
            
            </div>
        );
    }

    return (
        <>
            <Navbar />
            {showStart && (
                <div onClick={Start}><TestScreen test={numberTest}/></div>
            )}
            <div>
                {showTest && (
                    <div className='mt-[60px] h-[35rem] p-5 cursor-pointer bg-theme-blue flex flex-col items-center justify-center'>
                        <Test />
                    </div>
                )}
            </div>
            <Info test={testInfo}/>
            
        </>
    );
}

export default NumberTest;