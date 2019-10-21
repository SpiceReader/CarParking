import Car from './car.model';
import * as Interfaces from './car.interface';
//import express from 'express';

export class CarService {
    public async createCar(brand: String): Promise<Interfaces.DTO.Car> {
        let newCar = new Car(
            {
                brand: brand
            }
        );
        const addCar = await newCar.save();
        return addCar;
    }

    public async deleteCar(carId: String): Promise<Interfaces.DTO.Car> {        
        const deleteCar = await Car.findByIdAndRemove(carId, (err) => {
            if (err) {
               return (err);
            }         
        });
        return deleteCar;
    }

    public async getCar(carId: String): Promise<Interfaces.DTO.Car>  {
        const car = await Car.findById(carId, (err, car) => {
            if (err) {
                return (err);              
            }         
        });
        return car;
    }

    public getAllCars() {
        Car.find({}, (err, car) => {
            if (err) {
                return (err);
            }
            return car;
        });
    }

    public async updateCar(carId: String, brand: String): Promise<Interfaces.DTO.Car>  {                  
        const car = {
            brand: brand
        }
        const updateCar = await Car.findByIdAndUpdate(carId, car, {new: true});
        return updateCar;
    } 
}