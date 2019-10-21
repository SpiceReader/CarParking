import * as mongoose from 'mongoose';
import * as express from "express";
import * as bodyParser from "body-parser";
//import { ParkingRoutes } from "./Parking/parking.router";
//import { CarRoutes } from "./Car/car.router";

export class HTTPServer { 
    public app: express.Application;
    private port;

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
        this.app.use(Router);
    }
    
    /*public mongoSetup(URL): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(URL, { useNewUrlParser: true })     
        .then(() => console.log('Database working!!!'))
        .catch(e => console.log(e))
    }*/
    
    static create (port): any {
        const server = new HTTPServer(port);
        server.config();
        return server;
    }
    
    public start () {
        return new Promise ( function(res, rej) {
            this.app.listen(this.port, () => {
                console.log('Express server listening on port ' + this.port);
            })
            .catch(e => console.log(e))
        });
    }

}

//export new HTTPServer(app);