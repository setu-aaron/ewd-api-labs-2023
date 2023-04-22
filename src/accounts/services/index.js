import Account from '../entities/Account';

export default {
    registerAccount: async (firstName, lastName, email, password, {accountsRepository, authenticator}) => {
        var encryptedPassword = await authenticator.encrypt(password);
        console.log("PWD: " + password + " Encrypted Password: ", encryptedPassword)
        const account = new Account(undefined, firstName, lastName, email, encryptedPassword);
        console.log("services.registerAccount() called on object: ", accountsRepository);
        return accountsRepository.persist(account);
    },
    getAccount: (accountId, {accountsRepository}) => {
        return accountsRepository.get(accountId);
    },
    updateAccount: async (id, firstName, lastName, email, password, {accountsRepository, authenticator}) => {
        var encryptedPassword = await authenticator.encrypt(password);
        console.log("services.updateAccount() called");
        const account = new Account(id, firstName, lastName, email, encryptedPassword);

        accountsRepository.merge(account);
 
        const updatedAccount = accountsRepository.get(id);
        
        return updatedAccount;
    },
    find: ({accountsRepository}) => {
        console.log("services.find() called on object: ", accountsRepository);
        let accounts = accountsRepository.find();
        console.log("accounts: ", accounts);
        if (accounts === undefined) {
            return {};
        } else {
            return accounts;
        }
    },
    findByEmail: (email, {accountsRepository}) => {
        return accountsRepository.getByEmail(email);
    },

    authenticate: async (email, password, {accountsRepository, authenticator, tokenManager}) => {
        const account = await accountsRepository.getByEmail(email);
        
        const result = await authenticator.compare(password, account.password);
        if (!result) {
            throw new Error('Bad credentials');
        }
        const token = tokenManager.generate({email:account.email});
        return token;
    },
    getFavourites: async (accountId, { accountsRepository }) => {
        const account = await accountsRepository.get(accountId);
        return account.favorites;
    },
    addFavourite: async (accountId, movieId, { accountsRepository }) => {
        const account = await accountsRepository.get(accountId);
        account.favorites.push(movieId);
        return await accountsRepository.merge(account);
    }, 
    verifyToken: async (token, {accountsRepository, tokenManager}) => {
        const decoded = await tokenManager.decode(token);
        const user = await accountsRepository.getByEmail(decoded.email);
        if (!user){
            throw new Error('Bad token');
        }
        return user.email;
    }
};