import axios from 'axios';

import { configs } from '../config/env';

const request = axios.create({
    baseURL: configs.API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default request;
