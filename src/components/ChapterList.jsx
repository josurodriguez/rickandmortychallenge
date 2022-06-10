import React, { useEffect, useState } from "react";
import Chapter from "./Chapter";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import { getCharacterList } from "../hooks";

const ChapterList = ({ title, characters }) => {
  const [chapters, setChapter] = useState([]);

  const handleCharactersList = async () => {
    const data = await getCharacterList(characters);
    data.length !== 2 ? setChapter(data.episode) : chaptersFilter(data);
  };

  const chaptersFilter = (characters) => {
    const chaptersFilter = characters[0].episode.filter((chapter) =>
      characters[1].episode.includes(chapter)
    );
    setChapter(chaptersFilter);
  };

  useEffect(() => {
    if (characters[0] !== 0) {
      handleCharactersList();
    }
  }, [characters]);

  return (
    <Container>
      <Title>{title}</Title>
      <ChapterSection>
        {chapters &&
          chapters.map((chapter, i) => (
            <Fade bottom>
              <Chapter key={i} chapter={chapter} />
            </Fade>
          ))}
      </ChapterSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 30%;
`;

const ChapterSection = styled.div`
  align-items: center;
`;

const Title = styled.p`
  font-family: Source Code Pro, monospace;
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  color: white;
`;

export default ChapterList;
