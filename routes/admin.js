var express = require('express');
var router = express.Router();
var title = process.env.TITLE ||"bongoLand";
var {
    MongoClient
} = require('mongodb');

const books =[{
    title: "xxx",
    genre: "fiction",
    author:"aco",
    bookId:1,
    read:false
},
{
    title: "abc",
    genre: "fiction",
    author:"aco",
    bookId:223111,
    read:false
},
{
    title: "qrz",
    genre: "fiction",
    author:"aco",
    bookId:223111,
    read:false
},
{
    title: "yyy",
    genre: "non-fiction",
    author:"Biko",
    bookId:22311,
    read:false
}

];
/* GET home page. */
router.get('/', function (req, res, next) {
    const url = "mongodb://pga-library.documents.azure.com:10255/?ssl=true&replicaSet=globaldb";
    const password = "NOvv8tBLD7yGCnNbUJysuaLRlmR0vJYCwZAJvSsNWDQwF7EhabclzXX8G9YvEFlJOiiNjtc277lmsjQjgJH6YQ==";
    const dbName = "library";
    const user = "pga-library";
    (async function mongo(){
        let client;
        try {
            client = await MongoClient.connect(url,{auth:{user,password}});
            const db = client.db(dbName);
            const response = await db.collection('books').insertMany(books);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }())

});

module.exports = router;

// This is a test