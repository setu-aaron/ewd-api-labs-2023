import axios from 'axios';

export default {
    getMovie : async (movieId) => {
        console.log("MoviesService - calling tmdb via axios with movie id: ", movieId)

        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_KEY}`);
        return response.data;
    },
    find: async (query) => {
        console.log("MoviesService - calling tmdb via axios");

        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${query}`);
        return response.data;
    },

    upcoming: async (query) => {
        console.log("MoviesService - calling upcoming via axios")

        const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&${query}`);
        
        return response.data;
    }
}
