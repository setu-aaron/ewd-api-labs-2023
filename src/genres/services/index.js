import axios from 'axios';
import Genre from '../entities/Genre';

export default {
    // find: async (query) => {
    //      const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US&${query}`);
    //     return response.data;
    // }
    find: ({genreRepository}) => {
        console.log("GenreServices.find() called on object: ", genreRepository);
        let genres = genreRepository.find();
        console.log("genres: ", genres);
        if (genres === undefined) {
            return {};
        } else {
            return genres;
        }
    },
    load: async ({genreRepository})=> {
        let savedGenres = await genreRepository.find();
        console.log("Saved Genres count: ", savedGenres);
        let a= 0;
        if (savedGenres === undefined || savedGenres.length == 0) {
            console.log(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`)
            const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`);
            const genresArray = response.data.genres;
            console.log("Retrieved genres from tmdb: ", genresArray.length);
            while (a < genresArray.length) {
                const genre = genresArray[a];
                const newGenre = new Genre(undefined, genre.id, genre.name);
                genreRepository.persist(newGenre);
                a++;
            }
        } else {
            console.log("Not loading genres")
        }
        return "loaded " + a + " repositories";
    }
};