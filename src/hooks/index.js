import axios from "axios";

const UrlCharacter = "https://rickandmortyapi.com/api/character";
const UrlPages = "https://rickandmortyapi.com/api/character"

export const getChapter = async (chapter) => {
    try {
        const data = await axios(chapter).then((data) => data.data);
        return data
    } catch (error) {
        console.log(error)
    }
};

export const getCharacterList = async (character) => {
    const url = `${UrlCharacter}/${character}`;
    try {
        const data = await axios(url).then((data) => data.data);
        return data
    } catch (error) {
        console.log(error)
    }
  };

export const getCharacterListForPage = async (page) => {
    const pageUrl = `${UrlPages}/?page=${page}`;
    try {
        const data = await axios(pageUrl).then((data) => data.data);
        return data
    } catch (error) {
     console.log(error)   
    }
  };