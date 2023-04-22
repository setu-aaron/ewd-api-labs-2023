import express from 'express';
import GenresController from '../controllers';

const createGenresRouter = (dependencies) => {
    // console.log("Create Genres Router");
    // console.log("CGR - Dependencies", dependencies);
    
    const router = express.Router();

    const genresController = GenresController(dependencies);

    // console.log("CGR - Genres Controller", genresController);

    router.route('/')
        .get(genresController.find);
    
    router.route('/load')
        .get(genresController.loadGenres);
    
    return router;
};

export default createGenresRouter;
