import React from "react";
import ChapterList from "../components/ChapterList";
import CharactersList from "../components/CharactersList";
import styled from "styled-components";

const HomeView = ({
  character1,
  character2,
  characters,
  charactersSelected,
}) => {
  return (
    <div>
      <CharactersContainer>
        <CharactersList title={"Character #1"} />
        <CharactersList title={"Character #2"} />
      </CharactersContainer>
      <ChaptersContainer>
        {charactersSelected ? (
          <>
            <ChapterList
              title={"Character #1 - Only Epdisodes"}
              characters={character1}
            />
            <ChapterList
              title={"Character #1 & #2 - Shared Episodes"}
              characters={characters}
            />
            <ChapterList
              title={"Character #2 - Only Epdisodes"}
              characters={character2}
            />
          </>
        ) : null}
      </ChaptersContainer>
    </div>
  );
};

const CharactersContainer = styled.div`
  display: flex;

  width: 90%;
`;

const ChaptersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

export default HomeView;
