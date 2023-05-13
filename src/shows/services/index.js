import axios from 'axios';

export default {
    getShow: async(showId) => {
        console.log("ShowssService - calling tmdb via axios with show id: ", showId);

        const response = await axios.get(`https://api.themoviedb.org/3/tv/${showId}?api_key=${process.env.TMDB_KEY}`);
        return response.data;
    },
    
    getShowImages: async(showId) => {
        console.log("ShowssServiceImages - calling tmdb via axios with show id: ", showId);

        const response = await axios.get(`https://api.themoviedb.org/3/tv/${showId}/images?api_key=${process.env.TMDB_KEY}`);
        return response.data;
    },

    getEpisodeDetails: async(showId, seasonId, episodeId) => {
        console.log("ShowssServiceImages - calling tmdb via axios with show id: ", showId);

        const response = await axios.get(`https://api.themoviedb.org/3/tv/${showId}/season/${seasonId}/episode/${episodeId}?api_key=${process.env.TMDB_KEY}`);
        return response.data;
    },

    getSeasonDetails: async(showId, seasonId) => {
        console.log("ShowssServiceImages - calling tmdb via axios with show id: ", showId);

        const response = await axios.get(`https://api.themoviedb.org/3/tv/${showId}/season/${seasonId}?api_key=${process.env.TMDB_KEY}`);
        return response.data;
    },

    getCredits: async(showId) => {
        console.log("ShowssServiceImages - calling tmdb via axios with show id: ", showId);

        const response = await axios.get(`https://api.themoviedb.org/3/tv/${showId}/credits?api_key=${process.env.TMDB_KEY}`);
        return response.data;
    },

    find: async (pageNumber) => {
        console.log("ShowsService - calling tmdb via axios");

        const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${pageNumber}`);
        return response.data;
    }
};