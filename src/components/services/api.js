import axios from 'axios';

axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';
const KEY = '4KV9Chpg2H2cGNoEZkUT6nJwkLvlEuMx';

export const getEventFetch = async page => {
  const response = await axios(`events?size=20&apikey=${KEY}&page=${page}`);
  return response.data._embedded.events;
};

export const getEventDetails = async id => {
  const response = await axios(`events/${id}?apikey=${KEY}`);
  return response.data;
};
