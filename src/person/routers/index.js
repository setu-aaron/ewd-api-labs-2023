import express from 'express';
import PersonController from '../controllers';
import AccountsController from '../../accounts/controllers';

const createShowsRouter = (dependencies) => {
    const router = express.Router();

    const personController = PersonController(dependencies);
    const accountsController = AccountsController(dependencies);

    router.route('/*').all(accountsController.verify);

    router.route('/:id').get(personController.getPerson);
    router.route('/search/:text').get(personController.search);

    return router;
};

export default createShowsRouter;