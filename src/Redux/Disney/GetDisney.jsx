import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const generatePayload = (characters) => {
  const filterCharacter = characters.filter(
    (character) => character.tvShows.length > 0,
  );
  return filterCharacter;
};
const GetDisney = createAsyncThunk('Disney/getDisney', async () => {
  const response = await axios
    .get('https://api.disneyapi.dev/characters')
    .then((response) => {
      const payLoad = generatePayload(response.data.data);
      return payLoad;
    });
  return response;
});

export default GetDisney;
