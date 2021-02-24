import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nuralmkz-default-rtdb.firebaseio.com/'
});

export default instance;