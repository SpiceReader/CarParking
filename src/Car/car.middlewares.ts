import { Request, Response, NextFunction } from 'express';
import * as mongoose from 'mongoose';

export class CarMiddleware {

    public CarIdChecking = function (req: Request, res: Response, next: NextFunction) {
        if (!mongoose.Types.ObjectId.isValid(req.params.carId) || !mongoose.Types.ObjectId.isValid(req.body.carId)) {
            return res.status(404).send({ message: 'Invalid carId' });
        }
        next();
    };

    public CarEntityChecking = function (req: Request, res: Response, next: NextFunction) {
        if (typeof req.body.brand !== 'string') {
            return res.status(404).send({ message: 'Invalid data' });
        }
        next();
    };
}