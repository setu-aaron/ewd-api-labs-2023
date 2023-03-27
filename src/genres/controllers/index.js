import genreService from '../services/index.js';

export default(dependencies) => {
    const find = async (request, response, next) => {
        console.log("Calling genres/controllers find")
        //Input 
        const query = request.query;

        //Treatment
        const genres = await genreService.find(query);

        //Outptut
        response.status(200).json(genres);
    };

    return {
        find
    };
};
