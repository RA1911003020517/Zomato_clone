import express from "express";
import dotenv from "dotenv";

//database connection

import ConnectDB from "./database/connection";

import Auth from './api/auth';

dotenv.config();

const app = express();
app.use( express.json() );

app.get( "/", ( req, res ) =>
{
    res.json( {
        message: "Server is running",
    } );
} );


//  /auth/signup

app.use( "/auth", Auth );

const PORT = 4000;

app.listen( PORT, () =>
{
    console.log( "Server is running" );
     ConnectDB()
        .then( () =>
        {
            console.log( "DB is connected" );
        } )
        .catch( ( error ) =>
        {
            console.log( "server is runninng , but database connection failed" );
            console.log( error );
        } );
        
} );