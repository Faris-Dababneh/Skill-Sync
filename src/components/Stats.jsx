// recharts.org

import React, { useState, useEffect } from 'react';
import { LineChart, Line } from 'recharts';

import { getReactionTimes } from "../Server/Database";



function Stats({ props })
{
    let data = [];

    // FIX THIS IF STATEMENT
    if (props === 'ReactionTime')
    {   
        data = getReactionTimes();
    }
    
    //const sortedArray = [...data].sort((a, b) => a.average - b.average);
    console.log(data)


    return (
        <div>
            
        </div>
    );
}

export default Stats;