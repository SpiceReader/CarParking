import * as mongoose from 'mongoose';
import { Request, Response, NextFunction } from "express";
import { CarSchema } from "../Car/module";

const Car = mongoose.model('Car', CarSchema);

export class MainController {

    public addNewCar(req: Request, res: Response) {  
        let newCar = new Car(req.body);
        newCar.save((err, car) => {
            if (err) {
                res.send(err);
            }
            res.json(car);
        });
    }

    public deleteCar(req: Request, res: Response) {
        Car.remove({ _id: req.params.parkingId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Car successfully deleted!' });
        });
    }

    public getAllCars(req: Request, res: Response) {
        Car.find({}, (err, car) => {
            if (err) {
                res.send(err);
            }
            res.json(car);
        });
    }
}