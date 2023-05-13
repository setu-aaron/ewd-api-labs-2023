import axios from 'axios';

export default {
    getShow: async(showId) => {
        console.log("ShowssService - calling tmdb via axios with show id: ", showId)

        const response = await axios.get(`https://api.themoviedb.org/3/tv/${showId}?api_key=${import.meta.env.VITE_TMDB_KEY}`);
        return response.data;
    },

    find: async (pageNumber) => {
        console.log("ShowsService - calling tmdb via axios");

        const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${pageNumber}`);
        return response.data;
    }
};