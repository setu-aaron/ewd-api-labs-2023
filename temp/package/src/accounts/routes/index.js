import express from 'express';
import AccountsController from '../controllers';
import ValidationController from '../controllers/ValidationController';

const createRouter = (dependencies) => {
    const router = express.Router();

    // console.log("createRouter called")
    // console.log("dependencies: ", dependencies)
    // load controller with dependencies
    const accountsController = AccountsController(dependencies);
    const validationController = ValidationController(dependencies);
    

    //define routes
    router.route('/')
        .post(validationController.validateAccount, accountsController.createAccount);

    router.route('/')
        .get(accountsController.listAccounts);

    router.route('/:id')
        .get(accountsController.getAccount);
    
    router.route('/:id')
        .post(accountsController.updateAccount);

    router.route('/security/token')
        .post(accountsController.authenticateAccount);

    router.route('/:id/favourites')
        .post(validationController.validateUniqueMovieId, accountsController.addFavourite);

    router.route('/:id/favourites')
        .get(accountsController.getFavourites);
    return router;
};

export default createRouter;