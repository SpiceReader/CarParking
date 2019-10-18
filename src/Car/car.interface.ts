import mongoose from 'mongoose';

export namespace DTO {
    export interface Car {
        brand: string;
    }
}
export namespace Model {
    export interface Car extends DTO.Car, mongoose.Model<Document.Car> {
    }
}
export namespace Document {
    export interface Car extends DTO.Car, mongoose.Document {
    }
}