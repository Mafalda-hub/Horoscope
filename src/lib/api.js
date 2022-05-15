import axios from 'axios';

const baseUrl = 'https://aztro.sameerkumar.website';

export const todaysHoroscope = () => {
  return axios.get(`${baseUrl}/sign`);
};

export const getSingleSign = (sign) => {
  return axios.post(`${baseUrl}?sign=${sign}`);
};

export const registerUser = (user) => {
  return axios.post(`${baseUrl}/register`, user);
};

export const loginUser = (user) => {
  return axios.post(`${baseUrl}/login`, user);
};
