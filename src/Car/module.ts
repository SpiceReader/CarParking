import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CarSchema = new Schema({
    brand: {
        type: String
        //default: undefined
    }
});