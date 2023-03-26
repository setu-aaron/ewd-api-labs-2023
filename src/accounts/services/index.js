import Account from '../entities/Account';

export default {
    registerAccount: async (firstName, lastName, email, password, {accountsRepository}) => {
        const account = new Account(undefined, firstName, lastName, email, password);
        console.log("services.registerAccount() called on object: ", accountsRepository)
        return accountsRepository.persist(account);
    },
    getAccount: (accountId, {accountsRepository}) => {
        return accountsRepository.get(accountId);
    },
    find: ({accountsRepository}) => {
        console.log("services.find() called on object: ", accountsRepository)
        let accounts = accountsRepository.find();
        console.log("accounts: ", accounts)
        if (accounts === undefined) {
            return {};
        } else {
            return accounts;
        }
    },
    findByEmail: (email, {accountsRepository}) => {
        return accountsRepository.getByEmail(email);
    }
}