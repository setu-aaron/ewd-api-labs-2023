import express from 'express';
import ShowsController from '../controllers';
import AccountsController from '../../accounts/controllers';

const createShowsRouter = (dependencies) => {
    const router = express.Router;
    const showsController = ShowsController(dependencies);
    const accountsController = AccountsController(dependencies);

    router.route('/*').all(accountsController.verify);

    router.route('/:id').get(showsController.show);
    router.route('/').get(showsController.find);
    router.route('/page/:pageNumber').get(showsController.find);
};

export default createShowsRouter;