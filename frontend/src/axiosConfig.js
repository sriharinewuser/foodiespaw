import axios from 'axios';

axios.defaults.baseURL =

  process.env.NODE_ENV !== 'production' ? 'http://localhost:10000' : 'https://foodiespaw.onrender.com';
