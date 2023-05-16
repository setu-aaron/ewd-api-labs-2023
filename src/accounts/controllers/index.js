import { json } from "express";
import accountService from "../services/index.js";

export default (dependencies) => {
    const createAccount = async(request, response, next) => {
        //Input
        const {firstName, lastName, email} = request.body;
        // Treatment
        const account = await accountService.registerAccount(firstName, lastName, email, dependencies);
        // Output
        response.status(201).json(account);
    };

    const getAccount = async(request, response, next) => {
        //Input
        const accountId = request.params.id;
        // Treatment
        const account = await accountService.getAccount(accountId, dependencies);
        // Output
        response.status(200).json(account);
    };

    const updateAccount = async(request, response, next) => {
        console.log("Account Service", accountService);
        //Input
        const {id, firstName, lastName, email, password} = request.body;

        // Treatment
        const account = await accountService.updateAccount(id, firstName, lastName, email, password, dependencies);
        // Output
        response.status(201).json(account);
    };

    const listAccounts = async(request, response, next) => {
        console.log("accounts/controlers.listAccounts called");
        console.log("\tdependencies: ", dependencies);
        // Treatment
        const accounts = await accountService.find(dependencies);
        // Output
        response.status(200).json(accounts);
    };

    const authenticateAccount = async (request, response, next) => {
        try {
            const { email } = request.body;
            const token = await accountService.authenticateEmail(email, dependencies);
            response.status(200).json({ token: `BEARER ${token}` });
        } catch (error) {
            response.status(401).json({ message: 'Unauthorized' });
        }
    };

    const addFavourite = async (request, response, next) => {
        try {
            const { movieId } = request.body;
            const id = request.params.id;
            const account = await accountService.addFavourite(id, movieId, dependencies);
            response.status(200).json(account);
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };
    const getFavourites = async (request, response, next) => {
        try {
            const id = request.params.id;
            const favourites = await accountService.getFavourites(id, dependencies);
            response.status(200).json(favourites);
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };

    const verify = async(request, response, next) => {
        try {
            //Input
            const authHeader = request.headers.authorization;
            // /console.log("authHeader: ", authHeader);
            //Treatment 
            const accessToken = authHeader.split(" ")[1];
            const user = await accountService.verifyToken(accessToken, dependencies);

            //output
            next();
        } catch (err){
            next (new Error(`Verification failed ${err.message}`));
        }
    };
    return {
        createAccount,
        getAccount,
        listAccounts,
        updateAccount,
        authenticateAccount,
        addFavourite,
        getFavourites,
        verify
    };
};