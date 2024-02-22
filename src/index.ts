import { MongoClient } from "mongodb";

const express = require('express');
const body = require('body-parser');

async function start(){
    try{

        const app = express();

        const mongo = await MongoClient.connect('mongodb://localhost', {});

        await mongo.connect();

        app.db = mongo.db();

        //body parser
        app.use(body.json({
            limit: '500kb'
        }));
    }
    catch(error){
        console.log(error);
    }

};

start;