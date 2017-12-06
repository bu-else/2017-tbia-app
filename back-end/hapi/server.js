'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/tbia";

const Hapi = require('hapi');
const server = new Hapi.Server({ port: 3000, host: 'localhost' });

//___________________
// (Get) Assessments
//__________________
server.route({
    method: 'GET',
    path: '/assessments',
    handler: function(request, h) {


        var promise = new Promise(function(resolve, reject) {
            // do a thing, possibly async, then…
            var output = 0;
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                output = db.collection("assessments").find({});
            });

            if (output != 0) {
                resolve(output);
            } else {
                reject(Error("db promise error"));
            }
        });

        promise.then(function(result) { return (result) }, function(err) { console.log(err); });
    }
});




//___________________
// (Get) Initial Survey
//__________________











//___________________
// (Post) Assessment Responses
//__________________









//___________________
// (Get) History
// Note: On the back burner for now...
//__________________








//__________________
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});