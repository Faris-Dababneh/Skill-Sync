// Help from https://www.youtube.com/watch?v=brcHK3P6ChQ&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=2

import { useRef, useState, useEffect } from "react";

import { AiFillInfoCircle, AiFillCheckCircle } from 'react-icons/ai';
import { FaTimesCircle } from 'react-icons/fa';


import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';


function Login() {
    
    return (
        <div className="justify-center text-center">
            <Navbar></Navbar>
            <div className='mt-28'>
                <h1 className='text-6xl mb-2'>LOGIN</h1>
                <p className='text-theme-blue flex-1 text-xl'>Coming soon! <Link to={'/login'}><p className="underline "></p></Link></p>
            </div>
        </div>
    );
}

export default Login;