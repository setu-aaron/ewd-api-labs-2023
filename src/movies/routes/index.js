import express from 'express';
import MoviesController from '../controllers';

const createMoviesRouter = (dependencies) => {
    // console.log("Create Movies Router")
    // console.log("CMR - Dependencies", dependencies)
    
    const router = express.Router();

    const moviesController = MoviesController(dependencies);

    // console.log("CMR - Movies Controller", moviesController)

    router.route('/:id')
        .get(moviesController.getMovie);

    router.route('/')
        .get(moviesController.find);
    
    router.route('/upcoming')
        .get(moviesController.upcoming);
    
    return router;
};

export default createMoviesRouter;