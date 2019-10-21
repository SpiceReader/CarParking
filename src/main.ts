import { HTTPServer } from "./HTTPserver";
import { ParkingRoutes } from "./Parking/parking.router";
import { CarRoutes } from "./Car/car.router";
import { DBlauncher } from "./DBstarter";
import * as https from 'https';
import * as fs from 'fs';

const PORT = 3000;
const mongoUrl: string = 'mongodb://localhost/database';

/*const httpsOptions = {
    key: fs.readFileSync('./config/key.pem'),
    cert: fs.readFileSync('./config/cert.pem')
}*/
const Server = async function() {

    const DB = await DBlauncher.launch()
    DB.setup();

    const server = await HTTPServer.create(PORT);

    server.addRoutes(CarRoutes);
    server.addRoutes(ParkingRoutes);
    //server.mongoSetup(mongoUrl);
    await server.start()
    console.log('Server is started!');
};

Server()
.then(() => {
    console.log('Server is started!');
});



