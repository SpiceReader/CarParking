import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ParkingSchema = new Schema({
    cars: {
        type: [Array],
        default: undefined
    },
    type: {
        type: String
    },
    capacity: {
        type: Number
    },
    working_time: {
        type: Date,
        default: Date.now   
    }
});