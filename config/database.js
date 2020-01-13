const mongoose = require('mongoose');

const dbName = 'test';

module.exports = {
    connect: () => mongoose.connect('mongodb://carlos:cfwQL7iQicvzd7ChNe1KGV0fZxMoW28BoV6hmq3FokSQO4BnzQ3k4br3hI960o4XBVJ1FpjU138zVaXt9seIxg==@carlos.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&maxIdleTimeMS=520000&appName=@carlos@',{ useNewUrlParser: true }),
    dbName: dbName,
    connection:() =>{
        if(mongoose.connection)
         return mongoose.connection;
        return this.connect();
    }
}