import * as mongoose from 'mongoose';
import { Request, Response, NextFunction } from "express";
import { ParkingSchema } from "../Parking/module";

const Parking = mongoose.model('Parking', ParkingSchema);

export class MainController {

    public addNewParking(req: Request, res: Response) {
        let newParking = new Parking(req.body);
        newParking.save((err, parking) => {
            if (err) {
                res.send(err);
            }
            res.json(parking);
        });
        
    }

    public getParkingWithID(req: Request, res: Response) {
        Parking.remove(req.params.parkingId, (err, parking) => {
            if (err) {
                res.send(err);
            }
            res.json(parking);
        });
    }

    public getAllParkings(req: Request, res: Response) {
        Parking.find({}, (err, parking) => {
            if (err) {
                res.send(err);
            }
            res.json(parking);
        });
    }

    public updateParking(req: Request, res: Response) {
        Parking.findOneAndUpdate({ _id: req.params.parkingId }, req.body, { new: true }, (err, parking) => {
            if (err) {
                res.send(err);
            }           
            res.json(parking);          
        });
    }
    
    public deleteParking(req: Request, res: Response) {
        Parking.remove({ _id: req.params.parkingId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Parking successfully deleted!' });
        });
    }
}


//export const mainController = new MainController();