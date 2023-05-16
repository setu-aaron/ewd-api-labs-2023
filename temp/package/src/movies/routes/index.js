import express from 'express';
import MoviesController from '../controllers';
import AccountsController from '../../accounts/controllers';

const createMoviesRouter = (dependencies) => {
    const router = express.Router();

    const moviesController = MoviesController(dependencies);
    const accountsController = AccountsController(dependencies);

    router.route('/*').all(accountsController.verify);

    router.route('/:id').get(moviesController.getMovie);
    router.route('/:id/images').get(moviesController.getMovieImages);

    router.route('/').get(moviesController.find);
    router.route('/page/:pageNumber').get(moviesController.find);        
    
    router.route('/upcoming').get(moviesController.upcoming);
    router.route('/upcoming/page/:pageNumber').get(moviesController.upcoming);

    router.route('/reviews/:id').get(moviesController.getMovieReviews);
    router.route('/credits/:id').get(moviesController.getMovieCredits);
    
    return router;
};

export default createMoviesRouter;