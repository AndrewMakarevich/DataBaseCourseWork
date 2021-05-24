const {AirPlane} = require ('../models/models');
const {Seat} = require ('../models/models');
const {Crew} = require ('../models/models');
const ApiError = require('../error/ApiError');

class airplaneController{
    
    async create(req, res){
        const {placeAmount, planeModel, crewId} = req.body;
        const airplane = await AirPlane.create({placeAmount, planeModel, crewId});
        let seatClass;
        let row;
        for(let i=1; i<=placeAmount; i++){
            row = Math.ceil(i/6);
            if(i<13){
                seatClass = "A";
            }else if(i<25){
                seatClass ="B";
            }else{
                seatClass ="C";
            }
             const seats = await Seat.create({seatNumber: i,seatClass: seatClass, row: row,airplaneId: airplane.id})
        }
        return res.json(airplane);
        
    }
    async getAll(req, res, next){
       const airplanes = await AirPlane.findAll();
       return res.json(airplanes);
    }
    async getOne(req, res){
        const {id}= req.params;
        const airplane = await AirPlane.findOne({
            where:{id},
            include:[{model: Seat, as: 'seats'}]
        });
        return res.json(airplane);
    }

}

module.exports = new airplaneController();