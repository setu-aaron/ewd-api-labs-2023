import movieService from '../services';

export default(dependencies) => {
    const getMovie = async(request, response, next) => {
        console.log("Calling movies/controllers getMovie");
        //Input 
        const movieId = request.params.id;

        //Treatment
        const movie = await movieService.getMovie(movieId);

        //Output
        response.status(200).json(movie);
    };

    const getMovieImages = async(request, response, next) => {
        console.log("Calling movieImages/controllers getMovieImages");
        //Input 
        const movieId = request.params.id;

        //Treatment
        const movie = await movieService.getMovieImages(movieId);

        //Output
        response.status(200).json(movie);
    };

    const find = async (request, response, next) => {
        console.log("Calling movies/controllers find");
        let pageNumber = request.params.pageNumber;
        if (pageNumber == null){
            pageNumber = "1";
        }
        console.log("pageNumber is", pageNumber);
        //Input 
        const query = request.query;
        console.log("query is ", query)


        //Treatment
        const movies = await movieService.find(pageNumber, dependencies);

        //Outptut
        response.status(200).json(movies);
    };

    const upcoming = async (request, response, next) => {
        console.log("Calling upcoming movies/controllers find");
        //Input 
        const query = request.params.pageNumber;
        console.log("query is ", query)
        //Treatment
        const movies = await movieService.upcoming(query, dependencies);

        //Outptut
        response.status(200).json(movies);
    };

    const getMovieReviews = async(request, response, next) => {
        console.log("Calling movieImages/controllers getMovieImages");
        //Input 
        const movieId = request.params.id;

        //Treatment
        const movie = await movieService.getMovieReviews(movieId);

        //Output
        response.status(200).json(movie);
    };

    const getMovieCredits = async(request, response, next) => {
        console.log("Calling movieImages/controllers getMovieImages");
        //Input 
        const movieId = request.params.id;

        //Treatment
        const movie = await movieService.getMovieCredits(movieId);

        //Output
        response.status(200).json(movie);
    };
    return {
        getMovie,
        getMovieImages,
        find,
        upcoming,
        getMovieReviews,
        getMovieCredits
    };
};
