import { Request, Response } from "express";
import { ParkingController } from "./parking.controller";
import { ParkingMiddleware } from "./parking.middlewares"

export class ParkingRoutes {
    public parkingController: ParkingController = new ParkingController();
    public parkingMiddleware: ParkingMiddleware = new ParkingMiddleware();


    public routes(app): void {
                   
        app.route('/parking')
            .post(this.parkingMiddleware.ParkingEntityChecking, this.parkingController.addNewParking)
            .get(this.parkingController.getAllParkings)
            
        app.route('/parking/:parkingId')           
            .get(this.parkingMiddleware.ParkingIdChecking, this.parkingController.getParkingWithID)
            .delete(this.parkingMiddleware.ParkingIdChecking, this.parkingController.deleteParking)     
        
        app.route('/parking/:parkingId/cars/:carId')
            .put(this.parkingMiddleware.ParkingIdAndCarIdChecking, this.parkingController.updateParking_AddCar)
            .delete(this.parkingMiddleware.ParkingIdAndCarIdChecking, this.parkingController.updateParking_DeleteCar)
            
    }  
}

