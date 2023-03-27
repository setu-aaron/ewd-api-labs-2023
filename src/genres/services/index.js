import axios from 'axios';

export default {
    find: async (query) => {
         const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US&${query}`);
        return response.data;
    }
};