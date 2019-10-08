import * as mongoose from 'mongoose';
import * as express from "express";
import * as bodyParser from "body-parser";
//const express = require("express");
//const bodyParser = require("body-parser");
import { ParkingRoutes } from "./Parking/Router";
import { CarRoutes } from "./Car/Router";


class App {
    public app: express.Application;
    public routeCar: CarRoutes = new CarRoutes();
    public routeParking: ParkingRoutes = new ParkingRoutes();
    public mongoUrl: string = 'mongodb://localhost/database';

    constructor() {
        this.app = express();  
        this.config();
        this.routeCar.routes(this.app);
        this.routeParking.routes(this.app);
        this.mongoSetup();
    }
    
    private config(): void {
        this.app.use(bodyParser.json());      
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true })     
            .then(() => console.log('Database working!!!'))
            .catch(e => console.log(e))
    }
}

export default new App().app;


