import * as mongoose from 'mongoose';
import { Request, Response, NextFunction } from "express";
import { CarSchema } from "./car.model";

const Car = mongoose.model('Car', CarSchema);

export class MainController {    

    public async addCar(req: Request, res: Response) {
        let newCar = new Car(req.body);
        const addCar = await newCar.save();
        return res.status(200).json(addCar);
    }

    public async deleteCar(req: Request, res: Response) {        
        await Car.remove({ _id: req.params.carId }, (err) => {
            if (err) {
                res.send(err);
            }         
        });
        return res.status(200).json({ message: 'Car successfully deleted!' });
    }

    public getCar(req: Request, res: Response) {
        Car.findById(req.body.carId, (err, car) => {
            if (err) {
                res.send(err)
                res.json({ message: 'There isnt any car!!!' })
            }   
            return res.status(200).json(car);
        });
    }

    public getAllCars(req: Request, res: Response) {
        Car.find({}, (err, car) => {
            if (err) {
                res.send(err);
            }
            res.status(200).json(car);
        });
    }

    public updateCar(req: Request, res: Response) {                  
        Car.findOneAndUpdate({ _id: req.params.carId }, req.body, { new: true }, (err, car) => {
            if (err) {
                res.send(err);
            }
            res.status(201).json(car);
        });  
    }   
}