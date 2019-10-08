import { Request, Response } from "express";
//import express = require("express");
import { MainController } from "../Car/Controller";

export class CarRoutes {
    public mainController: MainController = new MainController();

    public routes(app): void {

        app.route('/parking/:parkingId/cars')
            .get(this.mainController.getAllCars)
            .post(this.mainController.addNewCar)

        app.route('/parking/:parkingId/cars/:carsId')
            .delete(this.mainController.deleteCar)

    }
}