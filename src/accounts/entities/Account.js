export default class {
    constructor( id = undefined, firstName, lastName, email, password, favorites=[]) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.favorites = favorites;
    }
}