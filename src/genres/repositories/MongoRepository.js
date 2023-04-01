import Genre from "../entities/Genre";
import mongoose from "mongoose";
import Repository from "./Repository";

export default class extends Repository {
    constructor() {
        super();
        const genreSchema = new mongoose.Schema({
            tmdbId: Number,
            name: String
        });
        this.model = mongoose.model("Genre", genreSchema);
    }

    async persist(genre) {
        const {tmdbId, name} = genre;
        const result = new this.model({tmdbId, name});
        await result.save();
        genre.id = result.id;
        return genre;
    }

    async find() {
        const genres = await this.model.find();
        return genres.map((result)=>{
            return new Genre(result.id, result.tmdbId, result.name);
        });
    }
};

