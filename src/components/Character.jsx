import { useContext } from "react";
import RickAndMortyContext from "../context";
import styled, { css } from "styled-components";

const Character = ({ name, image, title, id }) => {
  const { charactersSelected, setCharactersSelected } =
    useContext(RickAndMortyContext);

  const { character1, character2 } = charactersSelected;

  const handleSelect = () => {
    title.includes("2")
      ? setCharactersSelected((character) => ({
          ...character,
          character2: id,
        }))
      : setCharactersSelected((character) => ({
          ...character,
          character1: id,
        }));
  };

  const isSelected = () => {
    if (title.includes("1")) {
      if (character1 === id) return true;
    } else {
      if (character2 === id) return true;
    }
  };

  return (
    <Card isSelected={isSelected()} onClick={() => handleSelect()}>
      <Image src={image} />
      <CardContent>
        <Name>{name}</Name>
      </CardContent>
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  background: white;
  border-radius: 10px;
  box-shadow: -2px 5px 10px 0px rgba(15, 22, 191, 0.75);
  ${(props) =>
    props.isSelected &&
    css`
      box-shadow: -2px 5px 10px 0px rgba(15, 22, 191, 0.75);
      transform: translate(0px, -3px);
      background: #2eccfa;
    `};
  &:hover {
    cursor: pointer;
    box-shadow: -2px 10px 55px 0px rgba(15, 22, 191, 0.75);
  }
`;

const CardContent = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 250px;
`;

const Name = styled.p`
  font-family: Source Code Pro, monospace;
  font-size: 14px;
  font-weight: 900;
`;

export default Character;
