import express from 'express';
import AccountsController from '../controllers';

const createRouter = (dependencies) => {
    const router = express.Router();

    console.log("createRouter called")
    console.log("dependencies: ", dependencies)
    // load controller with dependencies
    const accountsController = AccountsController(dependencies);

    //define routes
    router.route('/')
        .post(accountsController.createAccount);

    router.route('/')
        .get(accountsController.listAccounts);

    router.route('/:id')
        .get(accountsController.getAccount);
    
    router.route('/:id')
        .post(accountsController.updateAccount);

    return router;
};

export default createRouter;