import React from 'react';
import Navbar from './components/Navbar/Navbar';

function Dashboard()
{
    return (
        <>
            <Navbar />
            <div className='flex items-center bg-background-color justify-center h-screen'>
                <div className='flex items-center bg-background-lightened justify-center h-[46rem] w-36 drop-shadow-lg rounded-sm '>

                </div>
                <div className='flex flex-col items-center '>
                    <div className='flex flex-col bg-background-lightened w-[50rem] h-[16rem] drop-shadow-lg rounded-sm m-5'>
                        <div className='ml-10 mt-10'>
                            <h2 className='text-2xl text-theme-blue'>Username</h2>
                            <h1 className='text-6xl'>Guest</h1>
                            <h2 className='mt-5 text-2xl text-theme-blue'>Games Played</h2>
                            <p className='text-5xl'>0</p>
                        </div>
                    </div>
                    <div className='flex items-center bg-background-lightened justify-center w-[50rem] h-[30rem] drop-shadow-lg rounded-sm'>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;