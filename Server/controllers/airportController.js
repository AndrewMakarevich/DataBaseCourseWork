const {Airport} = require ('../models/models');
class airportController{
    
    async create(req, res){
        const {airportName, airportCountry, airportAddress} = req.body;
        const airport = await Airport.create({airportName, airportCountry, airportAddress});
        return res.json(airport);
    }
    async getAll(req, res){
        const airports = await Airport.findAll();
       return res.json(airports);
    }
    async getOne(req, res){
        const {id} = req.params;
        const airport = await Airport.findOne(
            {
                where:{id}
            });
        return res.json(airport);
    }

}

module.exports = new airportController();