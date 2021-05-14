const {Pilot} = require ('../models/models');
class pilotController{
    
    async create(req, res){
        const {pilotName, pilotSurname, workExperience, education} = req.body;
        const pilot = await Pilot.create({pilotName, pilotSurname, workExperience, education});
        return res.json(pilot);
    }
    async getAll(req, res){
        
    }
    async getOne(req, res){
        
    }

}

module.exports = new pilotController();