import { Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';

export class ParkingMiddleware {

    public ParkingIdAndCarIdChecking = function (req: Request, res: Response, next: NextFunction) {
        if (!mongoose.Types.ObjectId.isValid(req.params.parkingId) || !(mongoose.Types.ObjectId.isValid(req.params.carId))) {
            return res.status(404).send({ message: 'Id is not found' });
        }
        next();
    };

    public ParkingIdChecking = function (req: Request, res: Response, next: NextFunction) {
        if (!mongoose.Types.ObjectId.isValid(req.body.parkingId) || !mongoose.Types.ObjectId.isValid(req.params.parkingId)) {
            return res.status(404).send({ message: 'Invalid parkingId' });
        }
        next();
    };

    public ParkingEntityChecking = function (req: Request, res: Response, next: NextFunction) {
        if (typeof req.body.type !== 'string' || typeof req.body.capacity !== 'number' || typeof req.body.workingStartTime !== 'string' || typeof req.body.workingEndTime !== 'string') {
            return res.status(404).send({ message: 'Invalid data' });
        }
        next();
    };
}