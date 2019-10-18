import * as mongoose from 'mongoose';
import * as express from "express";
import * as bodyParser from "body-parser";
import { ParkingRoutes } from "./Parking/parking.router";
import { CarRoutes } from "./Car/car.router";

// переименовать класс в HttpServer и сам файл, и создать main.ts 
// в названии parking.controlle  и тд названия файлов с малень буквы
export class HTTPServer { 
    public app: express.Application;
    public routeCar: CarRoutes = new CarRoutes();
    public routeParking: ParkingRoutes = new ParkingRoutes();
    public mongoUrl: string = 'mongodb://localhost/database';
// создать метод create static который создает инстанс класса и вызывать метод configure()
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

    static create (port: number): any {
        const server = new HTTPServer(port);
        server.config();
        return server;
    }
}

export default new HTTPServer().app;