import accountService from "../services/index.js";

export default (dependencies) => {
    const createAccount = async(request, response, next) => {
        //Input
        const {firstName, lastName, email, password} = request.body;
        // Treatment
        const account = await accountService.registerAccount(firstName, lastName, email, password, dependencies);
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
        console.log("Account Service", accountService)
        //Input
        const {id, firstName, lastName, email, password} = request.body;

        // Treatment
        const account = await accountService.updateAccount(id, firstName, lastName, email, password, dependencies);
        // Output
        response.status(201).json(account);
    };

    const listAccounts = async(request, response, next) => {
        console.log("accounts/controlers.listAccounts called")
        console.log("\tdependencies: ", dependencies)
        // Treatment
        const accounts = await accountService.find(dependencies);
        // Output
        response.status(200).json(accounts);
    };

    const authenticateAccount = async (request, response, next) => {
        try {
            const { email, password } = request.body;
            const token = await accountService.authenticate(email, password, dependencies);
            response.status(200).json({ token: `BEARER ${token}` });
        } catch (error) {
            response.status(401).json({ message: 'Unauthorized' });
        }
    };


    return {
        createAccount,
        getAccount,
        listAccounts,
        updateAccount,
        authenticateAccount
    };
}