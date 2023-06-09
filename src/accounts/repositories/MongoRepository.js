import Account from "../entities/Account";
import mongoose from "mongoose";
import Repository from "./Repository";

export default class extends Repository {
    constructor() {
        super();
        const accountSchema = new mongoose.Schema({
            firstName: String,
            lastName: String,
            email: {type: String, unique: true, index: true},
            password: String,
            favorites: [Number]
        });
        this.model = mongoose.model("Account", accountSchema);
    }

    async persist(accountEntity) {
        let tAccount =  await this.getByEmail(accountEntity.email);
        if (tAccount === null) {
            const {firstName, lastName, email, password, favorites} = accountEntity;
            const result = new this.model({firstName, lastName, email, password, favorites});
            await result.save();
            accountEntity.id = result.id;
            return accountEntity;
        } else {
            console.log("tAccount: ", tAccount);
            return tAccount;
        }
    }

    async merge(accountEntity) {
        const {id, firstName, lastName, email, password, favorites} = accountEntity;
        console.log("merging account", accountEntity );
        await this.model.findByIdAndUpdate(id, {firstName, lastName, email, password, favorites});
        console.log({id, firstName, lastName, email, password, favorites});
        return accountEntity;
    }

    async remove(userId) {
        await this.model.findOneAndDelete(userId);
        return;
    }

    async get(userId) {
        console.log("MongoRepo.get: Retrieving user id: ", userId);
        const result = await this.model.findById(userId);
        const {id, firstName, lastName, email, password, favorites} = result;
        console.log("Found user named: ", firstName);
        return new Account(id, firstName, lastName, email, password, favorites);
    }

    async getByEmail(userEmail) {
        const result = await this.model.findOne({email: userEmail});
        if (result === null) {
            return null;
        }
        return new Account(result.id, result.firstName, result.lastName, result.email, result.password, result.favorites);
    }

    async find() {
        const accounts = await this.model.find();
        return accounts.map((result)=>{
            return new Account(result.id, result.firstName, result.lastName, result.email, result.password, result.favorites);
        });
    }
};