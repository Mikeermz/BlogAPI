const db = require('../data/db');

class Model{


    constructor(table,fields = [`${table}.*`]){
        // ['users.*']
        this.db = db(table)
        this.fields = fields
    }

    findAll(){
        return this.db
    }

    findOne(id){
        return this.db.where({id})
    }

    create(data){
        return this.db.insert(data,this.fields)
    }

    update(id,data){
        return this.db.where({id}).update(data, this.fields)
    }

    delete(id){
        return this.db.where({id}).del()
    }

    findByParams(column, query){
        return this.db.where(column, query)
    }

}

module.exports = Model;