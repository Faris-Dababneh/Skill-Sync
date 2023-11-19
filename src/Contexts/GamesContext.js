import React, { createContext, useState } from 'react'

export const GamesContext = createContext()

const GamesContextProvider = (props) => {

    const games = [
        { title: 'REACTION TIME', description: 'Measure your visual reflexes.', icon: 'reaction', url: 'reaction-time' },
        { title: 'CHIMP TEST', description: 'You are not smarter than a chimpanzee.', icon: 'chimp', url: 'chimp-test' },
        { title: 'TYPING', description: "How fast can you type?", icon: 'type', url: 'type-test'},
        { title: 'SEQUENCE MEMORY', description: "Memorize sequences of button presses.", icon: 'type', url: 'sequence-test'},
        { title: 'VERBAL MEMORY', description: "Store as many words in memory as possible.", icon: 'type', url: 'verbal-test'},
        { title: 'NUMBER MEMORY', description: "Remember long numbers.", icon: 'type', url: 'number-test'},
        
      ];

    return (
         <GamesContext.Provider 
            value={{
                games
             }}>
               {props.children}
         </GamesContext.Provider>
    )
}
export default GamesContextProvider;