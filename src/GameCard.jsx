import React from 'react';
import {BsKeyboardFill} from 'react-icons/bs'; // Typing test
import {FaMailchimp} from 'react-icons/fa'; // Chimp Test
import {BsSpeedometer2} from 'react-icons/bs'; // Reaction Time
import {TfiLayoutGrid3Alt} from 'react-icons/tfi'; // Sequence Memory
import {MdAbc} from 'react-icons/md'; // Verbal Memory
import {Md123} from 'react-icons/md'; // Number Memory



const GameCard = ({ game }) => {
    const icons = {
        reaction: <BsSpeedometer2 className='w-16 h-16'/>,
        chimp: <FaMailchimp className='w-16 h-16'/>,
        type: <BsKeyboardFill className='w-16 h-16'/>,
        sequence: <TfiLayoutGrid3Alt className='w-10 h-10 mb-2'/>,
        verbal: <MdAbc className='w-16 h-16'/>,
        number: <Md123 className='w-16 h-16'/>
    };

    return (
        <div className="game">
            <div className='flex mb-2'>
                {icons[game.icon]}
            </div>
            <div>
                <h1 className='text-lg text-theme-blue font-bold'>{game.title}</h1>
            </div>
            <div id='card_desc'>
                <p className='text-sm'>{game.description}</p>
            </div>
        </div>
    );
}

export default GameCard;