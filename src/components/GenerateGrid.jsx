import React, { useEffect, useState, memo } from 'react';

const GenerateGrid = memo(function GenerateGrid(props)
{
    return (
        <div>
            {props.grid}
        </div>
    );
})

export default GenerateGrid;