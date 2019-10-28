import { HTTPServer } from "./HTTPserver";
import { ParkingRoutes } from "./Parking/parking.router";
import { CarRoutes } from "./Car/car.router";
import { DBlauncher } from "./DBstarter";
import * as https from 'https';
import * as fs from 'fs';

const PORT = 3000;
const mongoUrl: string = 'mongodb://localhost/database';
const routeCar: CarRoutes = new CarRoutes();
const routeParking: ParkingRoutes = new ParkingRoutes();

/*const httpsOptions = {
    key: fs.readFileSync('./config/key.pem'),
    cert: fs.readFileSync('./config/cert.pem')
}*/
const Server = async function() {

    const DB = await DBlauncher.launch()
    await DB.setup();

    const server = await HTTPServer.create(PORT);
    server.addRouters(routeCar);
    server.addRouters(routeParking);
    await server.start();
    console.log('Server is started!');
};

Server()
.then(() => {
    console.log('Server is started!');
});



