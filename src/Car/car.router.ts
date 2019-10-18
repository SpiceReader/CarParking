import { Request, Response } from "express";
import { MainController } from "./car.controller";
import { CarMiddleware } from "./car.middlewares";

export class CarRoutes {
    public mainController: MainController = new MainController();
    public carMiddleware: CarMiddleware = new CarMiddleware();

    public routes(app): void {

        app.route('/cars')
            .post(this.carMiddleware.CarEntityChecking, this.mainController.addCar)
            .get(this.mainController.getAllCars)
            
        app.route('/cars/:carId')
            .get(this.carMiddleware.CarIdChecking, this.mainController.getCar)
            .delete(this.carMiddleware.CarIdChecking, this.mainController.deleteCar)
            .put(this.carMiddleware.CarEntityChecking, this.mainController.updateCar)         

    }
}