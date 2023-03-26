import AccountRepository from "./Repository";

export default class extends AccountRepository {
    constructor() {
        super();
        this.index = 1;
        this.data = {};
        console.log("MemoryRepository.constructor() called")
    }

    persist(accountEntity) {
        const row = Object.assign({}, accountEntity);
        const rowId = this.index++;
        row.id = rowId;
        this.data[rowId] = row;
        console.log("MemoryRepository.persist() called", this.data)
        return rowId;
    }

    merge(accountEntity) {
        let row = this.data[accountEntity.id];
        Object.assign(row, accountEntity);
        return Promise.resolve();
    }

    remove(userId) {
        delete this.data[userId];
        return Promise.resolve();
    }

    get(userId) {
        return Promise.resolve(this.data[userId]);
    }

    getByEmail(email) {
        const users = this._dataAsArray();
        return Promise.resolve(users.find(user => user.email === email));
    }

    find() {
        console.log("MemoryRepository.find() called")
        return Promise.resolve(this.dataAsArray());
        
    }

    dataAsArray(){
        console.log("MemoryRepository.dataAsArray() called")
        return Object.keys(this.data).map(key => this.data[key]);
    }

}
