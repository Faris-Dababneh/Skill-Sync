/*
WHERE I LEFT OFF:
- STARTED DASHBOARD, DID NOT FINISH BECAUSE I NEED TO USE MONGODB TO STORE ALL THE GAMES FOR THE WEBSITE
 AND THEN BE ABLE TO USE THEM

 WATCH A YOUTUBE VIDEO ON HOW TO USE MONGODB IN REACT AND FIGURE OUT A WAY TO BE ABLE TO USE
 THE GAMES STORED IN MY DATABSE ONTO THE REACT APP PLZ
*/ 

import React, { useContext } from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card';
import {Link} from 'react-router-dom';
import code from "./Assets/code.png";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';



import GamesContextProvider, { GamesContext } from './Contexts/GamesContext';

import GameCard from './GameCard';


function Home() 
{


  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 100;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 100;
  }

  const openHub = () => {

  }

  const games = [
    { title: 'REACTION TIME', description: 'Measure your visual reflexes.', icon: 'reaction', url: 'reaction-time' },
    { title: 'NUMBER MEMORY', description: "How many digits can you remember?", icon: 'number', url: 'number-test'},
    { title: 'CHIMP TEST', description: 'Coming Soon!', icon: 'chimp', url: '' },
    { title: 'TYPING', description: "Coming Soon!", icon: 'type', url: ''},
    { title: 'PATTERN MEMORY', description: "Coming Soon!", icon: 'sequence', url: ''},
    { title: 'VERBAL MEMORY', description: "Coming Soon!", icon: 'verbal', url: ''},
    { title: 'SUGGESTIONS?', description: "Send us game ideas!", icon: '', url: 'suggestions'},
    
  ];

  
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className='flex mb-[6rem]'>
          <div className='flex mt-60 ml-20 flex-wrap w-[55rem]'>
            <GamesContextProvider>
              {games.map((game, index) => (
                <div>
                    <Link to={`/${game.url}`}><GameCard game={game} key={index}></GameCard></Link>
                </div>
              ))}
            </GamesContextProvider>
          </div>
          <div className='main'>
            <h1 className='main_text'>Test your cognitive abilities and compete with friends!</h1>
            <Link to='/reaction-time'><button className='main_button' id='start'>START</button></Link>
            <Link to='/signup'><button className='main_button' id='login'>SIGN UP</button></Link>
          </div>


        </div>
        

      </div>
    </>
  );
}

export default Home;

/*

<h1 className='text-4xl text-center mb-10'>ALL OF OUR GAMES!</h1>
        <div className='relative flex items-center' id='wrapper'>
          <GamesContextProvider>
            <MdChevronLeft size={40} onClick={slideLeft} className='opacity-50 cursor-pointer hover:opacity-100'/>
            <div className='flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide' id='slider'>
            {games.map((game, index) => (
                <div>
                    <Link to={`/${game.url}`}><GameCard game={game} key={index}></GameCard></Link>
                </div>
            ))}

            </div>
          </GamesContextProvider>
          <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' size={40} onClick={slideRight}/>

        </div>

*/

