import axios from 'axios';

const configOMB = {
    baseURL: `http://www.omdbapi.com`,
};

const apiKey = '9009a14'

const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const  property1 = `?apikey=${apiKey}&t=${title}`
        return axiosInstance.get(property1)
    },
    searchFilmsByType: (title: string, type: string) => {
        const  property1 = `?apikey=${apiKey}&t=${title}&type=${type}`
        return axiosInstance.get(property1)
    }
};


export default API;
