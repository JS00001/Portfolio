import axios from 'axios';

const baseUrl = 'https://jsen-backend.herokuapp.com'

export default {
  projects: async() => {
    const response = await axios.get(`${baseUrl}/projects`);
    return response.data;
  }
}