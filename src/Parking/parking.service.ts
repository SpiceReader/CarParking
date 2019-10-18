import * as mongoose from 'mongoose'
import { ParkingSchema } from './module'

const Parking = mongoose.model('Parking', ParkingSchema);

export class ParkingService {

    public addCar_toParking(carId: string, parkingId: string) {
        const parking = Parking.findById(parkingId);

        const currentTime = new Date();
        const ParkingWork = parking.workingTimeStart < currentTime && parking.workingTimeEnd > currentTime;

        if (!ParkingWork) {
            return { message: 'Parking is closed!!!' };
        }
        if (parking.cars.length !== parking.capacity) {
            const parkingUpd = {
                cars: parking.cars.concat(carId)
            };
            const parkingUpdate = Parking.findOneAndUpdate({ _id: parkingId }, parkingUpd, {
                new: true
            });
            return parkingUpdate;
        }
        return { message: 'Car is not added!!!' }      
    }
    

    public async deleteCar_fromParking(carId: string, parkingId: string) {
        let parking = await Parking.findById(parkingId);

        const currentTime = new Date();
        const ParkingWork = parking.workingTimeStart < currentTime && parking.workingTimeEnd > currentTime;

        if (!ParkingWork) {
            return { message: 'Parking is closed!!!' };
        }
        if (parking.cars.length === 0) {
            return { message: 'Parking is empty!!!' };
        }
        if (parking.cars.indexOf(carId) !== -1) {
            const parkingFix = await Parking.findById(parkingId);
            const CarIndex = parkingFix.cars.indexOf(carId);
            const CountOfCars_afterRemoving = parkingFix.cars.splice(CarIndex, 1);
            const parking = {
                cars: CountOfCars_afterRemoving,
            }
            const parkingUpdate = await Parking.findOneAndUpdate({ _id: parkingId }, parking, {
                new: true
            });
            return parkingUpdate;
        }
        return {message: 'Car is not deleted!!!'}
    }
   
}