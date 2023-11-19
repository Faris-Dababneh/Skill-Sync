import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';

import { uploadGameSuggestion } from './Server/Database';
import { useNavigate } from "react-router-dom";

function Suggestions()
{
    const navigate = useNavigate();

    const [answer, setAnswer] = useState('');
    const [name, setName] = useState('');

    const submit = () => {
        uploadGameSuggestion(answer, name);
        navigate('/')
    }

    return (
        <div>
            <Navbar />
            <div className='w-full h-full justify-center align-center items-center text-center flex flex-col mt-[15rem]'>
                <>
                    <h1 className='text-4xl mb-10'>SEND US GAME SUGGESTIONS!</h1>
                    <p className='text-lg mb-1'>Name (optional)</p>
                    <input type='text' className='w-[40rem] h-[3rem] bg-[#0f4daa] mb-5 rounded-md text-2xl p-1 text-center shadow-[2px_2px_5px_#111] overflow-auto' autofocus onChange={event => setName(event.target.value)}/>
                    <p className='text-lg mb-1'>Suggestion</p>
                    <textarea type='textarea' className='w-[40rem] h-[10rem] bg-[#0f4daa] mb-5 rounded-md text-2xl p-1 text-center shadow-[2px_2px_5px_#111] overflow-auto' autofocus onChange={event => setAnswer(event.target.value)}/>
                    <button className='w-[40rem] h-[3rem] border-solid border-tile border-[3px] rounded-md text-xl hover:border-tile-hover' onClick={submit}>SUBMIT</button>
                </>
                
            </div>
        </div>
    );
}

export default Suggestions;