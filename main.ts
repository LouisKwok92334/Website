import express from 'express';
import path from 'path';
import http from "http";
import dotenv from "dotenv";
import Knex from "knex";
 const knexfile = require("./knexfile");
export const knex = Knex(knexfile[process.env.NODE_ENV || "development"]);
import {ForumsService} from "./services/ForumsService";
import {ForumsController} from "./controllers/ForumsController";
import {forumsRoutes, initRoutes} from "./routes";

dotenv.config();

const app = express();
export const server = new http.Server(app);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

export const forumsService = new ForumsService(knex);
export const forumsController = new ForumsController(forumsService)
initRoutes();

app.use(express.static('public'));
app.use(express.static('public/html'));
app.use("/",forumsRoutes);

app.use((req,res)=>{
    res.sendFile(path.resolve('./public/html/404.html'))
})

const port = process.env.SERVER_PORT;
server.listen(port,function(){
	console.log(`Listening at http://localhost:${port}`)
})