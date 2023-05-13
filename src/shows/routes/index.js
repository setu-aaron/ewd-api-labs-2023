import express from 'express';
import ShowsController from '../controllers';
import AccountsController from '../../accounts/controllers';

const createShowsRouter = (dependencies) => {
    const router = express.Router();

    const showsController = ShowsController(dependencies);
    const accountsController = AccountsController(dependencies);

    router.route('/*').all(accountsController.verify);

    router.route('/:id').get(showsController.getShow);
    router.route('/:id/images').get(showsController.getShowImages);
    router.route('/:id/credits').get(showsController.getCredits);
    router.route('/:id/season/:seasonId').get(showsController.getSeasonDetails);
    router.route('/:id/season/:seasonId/episode/:episodeId').get(showsController.getEpisodeDetails);

    router.route('/').get(showsController.find);
    router.route('/page/:pageNumber').get(showsController.find);

    return router;
};

export default createShowsRouter;