import * as mongoose from 'mongoose';
import { Request, Response, NextFunction } from "express";
import { ParkingSchema } from "./parking.model";
import { CarSchema } from "../Car/car.model";
import { ParkingService } from "./parking.service";

const Parking = mongoose.model('Parking', ParkingSchema);
const Car = mongoose.model('Car', CarSchema);


export class ParkingController {
    public parking: ParkingService = new ParkingService();

    public async addNewParking(req: Request, res: Response) {            
        //let newParking = new Parking(req.body);
        const type = req.params.type;
        const capacity = req.body.capacity;
        const StartTime = req.body.workingTimeStart;
        const EndTime = req.body.workingTimeEnd;
        const newParking = await this.parking.addNewParking(type, capacity, StartTime, EndTime);
        return newParking;
    }

    public async getParkingWithID(req: Request, res: Response) {
       const ID = req.params.parkingId;
       const parking = await this.parking.getParkingWithID(ID);
       return parking;
    }

    public async getAllParkings(req: Request, res: Response) {
        const AllParkings = await this.parking.getAllParkings();
        return AllParkings;
    }
    
    public async deleteParking(req: Request, res: Response) {
        const ID = req.params.parkingId;
        const deletedParking = await this.parking.deleteParkingService(ID);
        return deletedParking;
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
