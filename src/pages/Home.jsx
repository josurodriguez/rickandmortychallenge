import React, { useContext } from "react";
import RickAndMortyContext from "../context";
import HomeView from "../views/HomeView";

const HomeScreen = () => {
  const { charactersSelected } = useContext(RickAndMortyContext);
  const character1 = [charactersSelected.character1];
  const character2 = [charactersSelected.character2];
  const characters = [character1, character2];

  return (
    <HomeView
      character1={character1}
      character2={character2}
      characters={characters}
      charactersSelected={charactersSelected}
    />
  );
};

export default HomeScreen;
