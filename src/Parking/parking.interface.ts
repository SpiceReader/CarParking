import mongoose from 'mongoose';

export namespace DTO {
    export interface Parking {
        cars: {
            type: Array<String>,       
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
    }
}
export namespace Model {
    export interface Parking extends DTO.Parking, mongoose.Model<Document.Parking> {
    }
}
export namespace Document {
    export interface Parking extends DTO.Parking, mongoose.Document {
    }
}