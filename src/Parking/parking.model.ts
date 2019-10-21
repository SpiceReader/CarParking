import * as mongoose from 'mongoose';
import * as Interfaces from './parking.interface';

const Schema = mongoose.Schema;

export const ParkingSchema = new Schema({
    cars: {
        type: Array,       
    },
    type: {
        type: String
    },
    capacity: {
        type: Number
    },
    workingTimeStart: {
        type: Date,   
    },
    workingTimeEnd: {
        type: Date       
    }
});

const Car = mongoose.model<Interfaces.Document.Parking, Interfaces.Model.Parking>('Parking', ParkingSchema);

export default Car;