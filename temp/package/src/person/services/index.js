import axios from "axios";

export default {
    getPerson: async(personId) => {
        console.log("ShowssService - calling tmdb via axios with show id: ", personId);

        const response = await axios.get(`https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.TMDB_KEY}`);
        return response.data;
    },

    search: async(text) => {
        console.log("ShowsService - calling tmdb via axios with show id: ", text);
        const encodedText = encodeURIComponent(text);
        const response = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${process.env.TMDB_KEY}&query=${encodedText}&include_adult=false`);

        return response.data;
    }
};