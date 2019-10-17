import * as mongoose from 'mongoose';

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
