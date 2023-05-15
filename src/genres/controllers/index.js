import genreService from '../services/index.js';

export default(dependencies) => {
    const find = async (request, response, next) => {
        console.log("Calling genres/controllers find with ");
        //Input 
        const query = request.query;

        //Treatment
        const genres = await genreService.find(dependencies);
        let genresContract = {genres: genres};
        //Outptut
        response.status(200).json(genresContract);
    };

    const loadGenres = async(request, response, next) => {
        console.log("Calling genres/controllers load");
        //Input 
        //const query = request.query;

        //Treatment
        const genres = await genreService.load(dependencies);

        //Outptut
        response.status(200).json(genres);
    };

    return {
        find,
        loadGenres,
    };
};
