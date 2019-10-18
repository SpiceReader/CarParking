import * as mongoose from 'mongoose';
import * as Interfaces from './car.interface';

const Schema = mongoose.Schema;

export const CarSchema = new Schema({
    brand: {
        type: String
    }
});
// переименовать в модель CAr.model
// добавить cardto и mongoose document
const Car = mongoose.model<Interfaces.Document.Car, Interfaces.Model.Car>('Car', CarSchema);

export default Car;