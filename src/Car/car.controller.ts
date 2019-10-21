import * as mongoose from 'mongoose';
import { Request, Response, NextFunction } from "express";
import { CarSchema } from "./car.model";
import { CarService } from "./car.service"
const Car = mongoose.model('Car', CarSchema);

export class MainController {  
    private carService: CarService = new CarService();

    public async addCar(req: Request, res: Response) {
        const brand = req.params.brand;
        let newCar = await this.carService.createCar(brand);
        return res.status(200).json(newCar);
    }

    public async deleteCar(req: Request, res: Response) {        
        const carID = req.params.carId;
        const car = await this.carService.deleteCar(carID)
        return res.status(200).json({ message: 'Car successfully deleted!' });
    }

    public async getCar(req: Request, res: Response) {
        const carID = req.params.carId;
        const car = await this.carService.getCar(carID)
        return res.status(200).json(car);
    }

    public async getAllCars(req: Request, res: Response) {
        const cars = await this.carService.getAllCars();
        return cars;
    }

    public async updateCar(req: Request, res: Response) { 
        const carID = req.params.carId;
        const brand = req.params.brand;             
        const updateCar = await this.carService.updateCar(carID, brand);
        return updateCar;
    }   
}