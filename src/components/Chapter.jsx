import React, { useEffect, useState } from "react";
import { Puff } from "react-loading-icons";
import { getChapter } from "../hooks";

import styled from "styled-components";

const Chapter = ({ chapter }) => {
  const [chapterData, setChapterData] = useState({});

  const handleGetChapter = async () => {
    const data = await getChapter(chapter);
    setChapterData(data);
  };

  useEffect(() => {
    handleGetChapter();
  }, []);

  return !chapterData.name ? (
    <Puff />
  ) : (
    <Container>
      <Title>{chapterData.name} </Title>
      <Description>Episode: {chapterData.episode} </Description>
      <Description>{chapterData.air_date}</Description>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  box-shadow: -2px 10px 55px 0px rgba(15, 22, 191, 0.75);
  transition: 0.2s transform linear, 0.2s box-shadow linear;
  border-radius: 5px;
  padding: 10px;
  &:hover {
    box-shadow: -2px 5px 10px 0px rgba(15, 22, 191, 0.75);
    transform: translate(0px, -3px);
    border: qpx double #8950ff;
  }
`;

const Title = styled.p`
  font-family: Source Code Pro, monospace;
  font-size: 14px;
  font-weight: 900;
`;

const Description = styled.p`
  font-family: Source Code Pro, monospace;
  font-size: 10px;
  font-weight: 900;
`;

export default Chapter;
