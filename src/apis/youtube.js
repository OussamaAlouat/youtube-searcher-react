import axios from 'axios'
const KEY = 'AIzaSyBvTuAL4z55ecgPOx4uoRL9Hr5yiQf7IZo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResult: 5,
        key: KEY
    }
});
