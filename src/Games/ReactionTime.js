import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
//import 'E:/VSCODE PROJECTS/React Arcade App/src/App.css';
import Navbar from '../components/Navbar/Navbar';
import {BsSpeedometer2, BsStopwatchFill} from 'react-icons/bs';
import {FaEllipsisH} from 'react-icons/fa';
import {AiFillWarning} from 'react-icons/ai';

import { getReactionTimes, uploadReactionTimes } from '../Server/Database';
import { useNavigate } from "react-router-dom";

import Info from '../components/Info';

import Stats from '../components/Stats';


let trialCount = 0;
let totalReactionTime = 0;

function ReactionTime() {
    const [startTime, setStartTime] = useState();
    let endTime = 0;

    const [isGreen, setIsGreen] = useState(null);
    const [showButtons, setShowButtons] = useState(false);

    const [started, setStarted] = useState(false);
    const [ended, setEnded] = useState(false);

    const [icon, setIcon] = useState(<BsSpeedometer2 className='w-24 h-24 p-1'/>);
    const [css, setCss] = useState('mt-[60px] h-[35rem] p-5 cursor-pointer bg-theme-blue flex flex-col items-center justify-center')
    const [mainText, setMainText] = useState('REACTION TIME TEST');
    const [paragraph, setParagraph] = useState('When the red box turns green, click as fast as you can. Click to start.')

    const [average, setAverage] = useState(0);

    const navigate = useNavigate();

    const startTimer = () => {
        setStartTime(performance.now());
    }
    const endTimer = () => {
        endTime = performance.now();
    }

    const testInfo = {
        description: <p>This test measures visual-to-input reaction time at a low-level.<br/><br/> However, computer and monitor latency will affect your results. Get an average of your 5 tries and see how you compare!<br/><br/>Average Reaction Time: </p>,
        stats: <Stats props={'ReactionTime'}/>
    };

    function getTime()
    {

        endTimer();
        // Display reaction time. Subtracted 50 to account for rendering delay.
        setMainText(`${Math.floor(endTime - startTime - 50)} ms`);

        if (trialCount === 0)
        {
            totalReactionTime = 0;
        }

        totalReactionTime = totalReactionTime + (Math.floor(endTime - startTime - 50));
        trialCount = trialCount + 1;

        // Checks if user completed 5 tries
        if (trialCount === 5)
        {
            averageScore();
        }
        else
        {
            setCss('mt-[60px] h-[35rem] p-5 cursor-pointer bg-theme-blue flex flex-col items-center justify-center')
            setParagraph('Click to keep going')
            setIcon(<BsStopwatchFill className='w-24 h-24 p-1'/>)
            setIsGreen(false);
        }

        console.log(totalReactionTime);
        console.log(trialCount);
    }
    
    function averageScore()
    {
        let avg = Math.floor(totalReactionTime / 5);
        setAverage(avg);
        //uploadReactionTimes(average);

        setMainText(`${avg} ms`);
        setCss('mt-[60px] h-[35rem] p-5 cursor-default bg-theme-blue flex flex-col items-center justify-center');
        setParagraph('See how your average reaction time compares with others.');
        setIcon(<BsSpeedometer2 className='w-24 h-24 p-1'/>);
        setShowButtons(true);
        setEnded(true);
    }

    useEffect(() => {

        let min = 3000;
        let max = 6000;


        let timeoutId;

        const greenBox = () => {
            setMainText('CLICK')
            setCss('mt-[60px] h-[35rem] p-5 cursor-pointer bg-[#2ad463] 255, 0 flex flex-col items-center justify-center')
            setParagraph('')
            setIsGreen(true);
            setStarted(false);
            startTimer();
        };

        if (started === true) {
            // Generate random wait time between 3 and 6
            let time = Math.random() * (max - min ) + min;
            console.log(time);
            timeoutId = setTimeout(greenBox, time);
        } 
        
        // Prevent memory leak
        return () => clearTimeout(timeoutId);

    }, [started])

    const saveScore = () => {
        uploadReactionTimes(average);
        navigate('/dashboard')
    }

    const restart = () => {
        trialCount = 0;
        setShowButtons(false);
        setEnded(false);
        setStarted(false);
        setIsGreen(false);
        Start();

        //window.location.reload(false);
    }

    function Start() 
    {
        console.log(`started ${started}`)
        console.log(`green ${isGreen}`)
        console.log(`ended ${ended}`)
        
        if (isGreen)
        {
            getTime();
            setIsGreen(false);
        }
        else if (started)
        {
            setMainText('TOO SOON');
            setCss('mt-[60px] h-[34rem] p-5 cursor-pointer bg-theme-blue flex flex-col items-center justify-center')
            setParagraph('Click to retry')
            setIcon(<AiFillWarning className='w-24 h-24 p-1'/>)
            setStarted(false);
        }
        else
        {
            setMainText('WAIT FOR GREEN');
            setCss('mt-[60px] h-[34rem] p-5 cursor-pointer bg-red-600 flex flex-col items-center justify-center')
            setParagraph('')
            setIcon(<FaEllipsisH className='w-24 h-24 p-1'/>)
            setStarted(true);
        }
        

    }

    return (
        <>
            <div>
            <Navbar />
                <div className={css} onClick={ended ? () => {} : Start}>
                    { icon }
                    <div className='text-6xl items-center justify-center' disableTextHighlighting> 
                        { mainText }
                    </div>
                    <div className='max-w-[24rem] p-5 text-xl overflow-x-auto text-center justify-center flex flex-col' disableTextHighlighting>
                        { paragraph }
                    </div>
                    <div>
                        {showButtons && (
                            <>
                                <button className='bg-background-color w-[9rem] h-[3rem] m-3 text-lg text-[#2ad463] hover:bg-[#2ad463] hover:text-background-color' onClick={saveScore}>SAVE SCORE</button>
                                <button className='bg-background-color w-[9rem] h-[3rem] m-3 text-lg text-red-600 hover:bg-red-600 hover:text-background-color' onClick={restart}>RESTART</button>
                            </>
                        )}
                    </div>
                </div>
                <Info test={testInfo}/>
            </div>
        </>
    );
}

export default ReactionTime;