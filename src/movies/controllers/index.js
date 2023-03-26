import movieService from '../services';

export default(dependencies) => {
    const getMovie = async(request, response, next) => {
        console.log("Calling movies/controllers getMovie")
        //Input 
        const movieId = request.params.id;

        //Treatment
        const movie = await movieService.getMovie(movieId);

        //Output
        response.status(200).json(movie);
    };

    const find = async (request, response, next) => {
        console.log("Calling movies/controllers find")
        //Input 
        const query = request.query;

        //Treatment
        const movies = await movieService.find(query, dependencies);

        //Outptut
        response.status(200).json(movies);
    };

    return {
        getMovie,
        find
    };
};
