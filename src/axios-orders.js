import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-65add.firebaseio.com/'
});

export default instance;