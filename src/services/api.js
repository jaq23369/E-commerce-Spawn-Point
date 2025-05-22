// src/services/api.js
const API_KEY = '10d65c2f6f824c26a15b665a30c836f2';
const BASE_URL = 'https://api.rawg.io/api';

export const fetchGames = async (params = {}) => {
  const queryParams = new URLSearchParams({
    key: API_KEY,
    page_size: 12,
    ...params
  });
  
  try {
    const response = await fetch(`${BASE_URL}/games?${queryParams}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
};

export const fetchGameDetails = async (gameId) => {
  try {
    const response = await fetch(`${BASE_URL}/games/${gameId}?key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching game details:', error);
    return null;
  }
};

export const fetchGameScreenshots = async (gameId) => {
  try {
    const response = await fetch(`${BASE_URL}/games/${gameId}/screenshots?key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching game screenshots:', error);
    return [];
  }
};