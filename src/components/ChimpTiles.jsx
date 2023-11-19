import React, { useEffect, useState, memo } from 'react';


function ChimpTiles({ tileCount }) {

    /*
        MY IDEA FOR A CHIMP TEST TILE ALGORITHM:
        -HAVE A FUNCTION FOR VISIBLE TILES (WITH THE NUMBERS) AND EMPTY TILES (FULLY INVISIBLE)
        -THEN, RANDOMLY PLACE THE NUMBERED TILES IN BETWEEN THE INVISIBLE TILES TO MAKE A RANDOM
         ASSORTMENT OF TILES. 
        -MAKE ONLY THE NUMBERED TILES CLICKABLE
    */

    const rows = 5;
    const cols = 10;

    let grid = [];
    let hiddenGrid = [];
    //const [updateGrid, setUpdateGrid] = useState([]);
    
    const [hideGrid, setHideGrid] = useState(false);
    
    
    

    function whiteTile(number)
    {
        return (
            <div className='inline-flex w-[5rem] h-[5rem] m-2 align-middle border-solid border-white border-[5px] rounded-md bg-white' >
                <div className='ml-auto mr-auto my-2'><h1 className='text-5xl'></h1></div>
            </div>
        );
    }

    // Helper functions for the chimp test algorithm
    const getRandomNumber = (array) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    };

    const removeNumber = (array, target) => {
        const newArray = array.filter((number) => number !== target);
        return newArray;
    };

    /**
     * MY PROUDEST ACHIEVEMENT OF THIS PROJECT
     * THE CHIMP TEST ALGORITHM
     * 
     * 1. CREATES AN ARRAY FOR THE POSSIBLE TILE NUMBERS
     * 2. CALCULATES PROBABILITY BASED ON NUMBER OF TILES
     * 3. ITERATES THROUGH THE NUMBER OF ROWS AND COLUMNS SET AT THE START
     * 4. USES PROBABILITY TO DETERMINE WHETHER TO PLACE A CLICKABLE TILE (WITH ONE OF THE TILE NUMBERS) OR AN EMPTY ONE IN AN ARRAY SPOT
     * 5. ONCE PLACED, NUMBER OF TILES INCREMENTS, THE NUMBER OF THAT TILE PLACED IS REMOVED
     * 6. THEN, THE TEMPGRID RECEIVES THE CHANGES
     * 7. RECURSION IS IN PLACE TO ACCOUNT FOR MISSED TILES DUE TO PROBABILITY
     * 8. IF THERE ARE STILL TILES THAT HAVE NOT BEEN PLACED, THE FUNCTION EXECUTES ITSELF AGAIN
     */
    let tempGrid = [];
    let tempHiddenGrid = [];
    let numberArray = [];
    let modelGrid = [];
    const generateGrid = (tiles) => {
        let numTiles = 0;
        // Generates an array from 1 - number of tiles
        numberArray = Array.from({length: tiles}, (_, i) => i + 1);

        const probability = .02 * tiles;

        for (let row = 0; row < rows; row++)
        {
            let rowArray = [];
            let hiddenRowArray = [];
            let modelRowArray = [];

            for (let col = 0; col < cols; col++)
            {
                // Randomly choose between a clickable tile or filler
                let boxType = Math.random() < probability ? 1 : 2;
                
                if (numTiles < tiles)
                {
                    if (boxType === 1)
                    {
                        let tileNumber = getRandomNumber(numberArray);
                        numberArray = removeNumber(numberArray, tileNumber);

                        rowArray.push(tile(tileNumber));
                        hiddenRowArray.push(whiteTile(tileNumber));
                        
                        modelRowArray.push(1);
                        numTiles++;
                    }
                    else
                    {
                        rowArray.push(filler());
                        hiddenRowArray.push(filler());

                        modelRowArray.push(0);
                    }
                }
            }

            tempGrid.push(<div className='flex'>{rowArray}</div>);
            tempHiddenGrid.push(<div className='flex'>{hiddenRowArray}</div>)

            modelGrid.push(rowArray);
        }
        if (numTiles < tiles)
        {
            grid.splice(0, grid.length);
            hiddenGrid.splice(0, hiddenGrid.length);
            tempGrid = [];
            tempHiddenGrid = [];

            modelGrid = [];
            generateGrid(tiles)
        }
        grid.push(tempGrid);
        hiddenGrid.push(tempHiddenGrid);

        return (
            <div>{grid}</div>
        );
    };

    generateGrid(tileCount);
    


    // Creates a styled tile with a number
    function tile(number) {
        return (
            <div className='inline-flex w-[5rem] h-[5rem] m-2 align-middle border-solid border-tile border-[5px] rounded-md bg-theme-blue hover:border-tile-hover' onClick={() => {setHideGrid(true)}}>
                <div className='ml-auto mr-auto my-2'><h1 className='text-5xl'>{number}</h1></div>
            </div>
        );
    }
    // Creates an empty tile with the same dimensions as a full tile
    function filler() {
        return (
            <div className='inline-flex w-[5rem] h-[5rem] m-2 marker:align-middle border-solid border-theme-blue border-[5px] rounded-md bg-theme-blue'>
                <div className='ml-auto mr-auto my-2'><h1 className='text-5xl'></h1></div>
            </div>
        );
    }

    // Can use this function to decide when to render the hidden tiles vs the normal tiles
    function Grid(props)
    {
        const isClicked = props.isClicked;
        if (isClicked)
        {
            return <div>{hiddenGrid}</div>
        }
        return <div>{grid}</div>
    }


    return (
        <div className='flex flex-col w-[60rem] h-[30rem] bg-theme-blue' >
            {(hideGrid && 
                <div>{hiddenGrid}</div>
            )}
            {!hideGrid && (
                <div>{grid}</div>
            )}
        </div>
        
    );
    /*return (
        <div className='flex flex-col w-[60rem] h-[30rem] bg-theme-blue'>
            {(hideGrid && 
                <div>{hiddenGrid}</div>
            )}
            {!hideGrid && (
                <div>{grid}</div>
            )}

        </div>
    );*/
}

export default ChimpTiles