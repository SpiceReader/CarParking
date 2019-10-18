import * as mongoose from 'mongoose';
import { Request, Response, NextFunction } from "express";
import { ParkingSchema } from "../Parking/module";
import { CarSchema } from "../Car/module";
import { ParkingService } from "../Parking/Service";

const Parking = mongoose.model('Parking', ParkingSchema);
const Car = mongoose.model('Car', CarSchema);

export class ParkingController {
    public parking: ParkingService = new ParkingService();

    public async addNewParking(req: Request, res: Response) {            
        let newParking = new Parking(req.body);
        const parking = await newParking.save();
        return res.status(200).json(parking);
    }

    public getParkingWithID(req: Request, res: Response) {
        Parking.findById(req.params.parkingId, (err, parking) => {
            if (err) {
                res.send(err);
            }
            res.status(200).json(parking);
        });
    }

    public getAllParkings(req: Request, res: Response) {
        Parking.find({}, (err, parking) => {
            if (err) {
                res.send(err);
            }
            res.status(200).json(parking);
        });
    }
    
    public async deleteParking(req: Request, res: Response) {
        await Parking.remove({ _id: req.params.parkingId }, (err) => {
            if (err) {
                res.send(err);
            }        
        });
        return res.status(200).json({ message: 'Parking successfully deleted!' });
    }


    public async updateParking_AddCar(req: Request, res: Response) {
        const carId = req.params.carId;
        const parkingId = req.params.parkingId;
        const parking = await this.parking.addCar_toParking(carId, parkingId);
        return res.status(201).json(parking);   
    }

    public async updateParking_DeleteCar(req: Request, res: Response) {
        const carId = req.params.carId;
        const parkingId = req.params.parkingId;
        const parking = await this.parking.deleteCar_fromParking(carId, parkingId);
        return res.status(200).json(parking); 
    }

}
