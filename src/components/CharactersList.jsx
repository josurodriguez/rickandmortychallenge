import React, { useEffect, useState } from "react";

import Character from "./Character";
import { Pagination } from "@mui/material";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import { getCharacterListForPage } from "../hooks";

const CharactersList = ({ title }) => {
  const [characters, setCharacters] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [page, setPage] = useState(1);

  const handleGetPCharacters = async () => {
    const data = await getCharacterListForPage(page);
    setCharacters(data.results);
    setPagination(data.info.pages);
  };

  const handlePagination = (_, value) => {
    setPage(value);
  };

  useEffect(() => {
    handleGetPCharacters();
  }, [page]);

  return (
    <Container>
      <Title>{title}</Title>
      <PaginationContainer>
        <Pagination
          count={pagination}
          page={page}
          onChange={handlePagination}
        />
      </PaginationContainer>
      <CharacterSection>
        {characters.length > 0 &&
          characters.map((item, i) => (
            <Fade bottom>
              <Character title={title} key={item.id + i} {...item}></Character>
            </Fade>
          ))}
      </CharacterSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
`;

const PaginationContainer = styled.div`
  background: #2eccfa;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: -2px 10px 55px 0px rgba(15, 22, 191, 0.75);
`;

const CharacterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const Title = styled.p`
  font-family: Source Code Pro, monospace;
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  color: white;
  margin-bottom: 15px;
`;

export default CharactersList;
