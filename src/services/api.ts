import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse }  from 'axios';

export const api = axios.create({
    baseURL: 'https://api-nodejs-podcastr.herokuapp.com' || 'http://localhost:3333'
})