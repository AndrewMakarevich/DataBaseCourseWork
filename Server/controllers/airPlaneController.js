const {AirPlane} = require ('../models/models');
const ApiError = require('../error/ApiError');

class airplaneController{
    
    async create(req, res){
        const {placeAmount, planeModel} = req.body;
        const airplane = await AirPlane.create({placeAmount, planeModel});
        return res.json(airplane);
    }
    async getAll(req, res, next){
       
    }
    async getOne(req, res){
        
        
    }

}

module.exports = new airplaneController();