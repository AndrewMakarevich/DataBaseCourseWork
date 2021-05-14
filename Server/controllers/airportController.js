const {Airport} = require ('../models/models');
class airportController{
    
    async create(req, res){
        const {airportName, airportCountry, airportAddress} = req.body;
        const airport = await Airport.create({airportName, airportCountry, airportAddress});
        return res.json(airport);
    }
    async getAll(req, res){
        
    }
    async getOne(req, res){
        
    }

}

module.exports = new airportController();