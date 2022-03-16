import axios from 'axios';

const baseUrl = 'http://localhost:8080'

export default {
  projects: async() => {
    const response = await axios.get(`${baseUrl}/projects`);
    return response.data;
  }
}