'use strict';

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/tbia";

const Hapi = require('hapi');
const server = new Hapi.Server({ port: 3000, host: 'localhost' });

server.route({
    method: 'GET',
    path: '/assessments',
    handler: function(request, h) {
        results = {}
        console.log("before");

        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            db.collection("assessments").find({}).toArray(function(err, result) {
                if (err) throw err;
                console.log("in mongo call");
                results = result;
                db.close();
            });
        });

        console.log("after");
        return (results);
    }
});


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});