import axios from 'axios';


const KEY = 'AIzaSyAFASLfzOMRM3AzP77wbAjcD12UjQyTVBk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

