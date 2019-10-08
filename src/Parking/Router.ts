import { Request, Response } from "express";
//import express = require("express");
import { MainController } from "../Parking/Controller";

export class ParkingRoutes {

    public mainController: MainController = new MainController();


    public routes(app): void {
                   
        app.route('/parking')
            .post(this.mainController.addNewParking)
            .get(this.mainController.getAllParkings)
            
        app.route('/parking/:parkingId')
            .put(this.mainController.updateParking)
            .get(this.mainController.getParkingWithID)
            .delete(this.mainController.deleteParking)                          

    }  
}

