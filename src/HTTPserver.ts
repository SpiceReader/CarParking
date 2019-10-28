import * as mongoose from 'mongoose';
import * as express from "express";
import * as bodyParser from "body-parser";
import { ParkingRoutes } from "./Parking/parking.router";
import { CarRoutes } from "./Car/car.router";

export class HTTPServer { 
    public app: express.Application;
    private port: number;

    constructor(port: number) {
        this.app = express();  
        this.port = port;
    }
    
    private config(): void {
        this.app.use(bodyParser.json());      
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static('public'));       
    }

    public addRouters (Router){       
        Router.routes(this.app);
    }
    
    static create (port): any {
        const server = new HTTPServer(port);
        server.config();
        return server;
    }
    
    public start () {
        return new Promise ((resolve, reject) => {
            this.app.on('clientError', (error) => {
                reject();
            });
            this.app.listen(this.port, () => {
                resolve();
            });
       
        });
    }

}

//export new HTTPServer(app);