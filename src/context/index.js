import { createContext, useState } from 'react';

const RickAndMortyContext = createContext({})

export function RickAndMortyContextProvider({ children }) {
    const [charactersSelected, setCharactersSelected] = useState({
        character1: 0,
        character2: 0
    })
    return (
        <RickAndMortyContext.Provider value={{ charactersSelected, setCharactersSelected }}>
            {children}
        </RickAndMortyContext.Provider>)

}


export default RickAndMortyContext