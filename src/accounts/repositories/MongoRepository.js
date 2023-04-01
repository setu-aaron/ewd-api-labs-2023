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
            favourites: [Number]
        });
        this.model = mongoose.model("Account", accountSchema);
    }

    async persist(accountEntity) {
        const {firstName, lastName, email, password} = accountEntity;
        const result = new this.model({firstName, lastName, email, password});
        await result.save();
        accountEntity.id = result.id;
        return accountEntity;
    }

    async merge(accountEntity) {
        const {id, firstName, lastName, email, password} = accountEntity;
        console.log("merging account", firstName, id );
        await this.model.findByIdAndUpdate(id, {firstName, lastName, email, password});
        console.log({id, firstName, lastName, email, password});
        return accountEntity;
    }

    async remove(userId) {
        await this.model.findOneAndDelete(userId);
        return;
    }

    async get(userId) {
        const result = await this.model.findById(userId);
        const {id, firstName, lastName, email, password} = result;
        return new Account(id, firstName, lastName, email, password, result.favourites);
    }

    async getByEmail(userEmail) {
        const result = await this.model.findOne({email: userEmail});
        return new Account(result.id, result.firstName, result.lastName, result.email, result.password, result.favourites);
    }

    async find() {
        const accounts = await this.model.find();
        return accounts.map((result)=>{
            return new Account(result.id, result.firstName, result.lastName, result.email, result.password, result.favourites);
        });
    }
};