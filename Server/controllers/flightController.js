const {AirPlane} = require ('../models/models');
const {Flight} = require ('../models/models');
const {DeparturePoint} = require ('../models/models');
const {Airport} = require ('../models/models');
class flightController{
    
    async create(req, res){
      const {departureDate, arrivalDate, departureTime, arrivalTime, placeOfDestinationId, departurePointId, airplaneId} = req.body;
      const flight = await Flight.create({departureDate, arrivalDate, departureTime, arrivalTime, placeOfDestinationId, departurePointId, airplaneId});
      return res.json(flight);
    }
    async getAll(req, res){
        const flights = await Flight.findAll({
          include:[
            {model: AirPlane, as: 'airplane'}
          ]
        });
        return res.json(flights);
    }
    async getOne(req, res){
        const {id} = req.params;
        const flight= await Flight.findOne({
          where:{id},
          include:[{model: AirPlane, as: 'airplane'}],
        });
        return res.json(flight);
    }

}

module.exports = new flightController();