import React, { useEffect, useState, memo } from 'react';

const GenerateHiddenGrid = memo(function GeneratHiddeneGrid(props)
{
    return (
        <div className='flex flex-col w-[60rem] h-[30rem] bg-theme-blue'>
            <div>{props.grid}</div>

        </div>
    );
})

export default GenerateHiddenGrid;