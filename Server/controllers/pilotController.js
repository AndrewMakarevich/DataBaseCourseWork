const {Pilot} = require ('../models/models');
class pilotController{
    
    async create(req, res){
        const {pilotName, pilotSurname, workExperience, education, crewId} = req.body;
        const pilot = await Pilot.create({pilotName, pilotSurname, workExperience, education, crewId});
        return res.json(pilot);
    }
    async getAll(req, res){
        const {crewId} = req.query;
        if(crewId){
            const pilots = await Pilot.findAll({
                where:{crewId}
            });
            return res.json(pilots);
        }else{
            const pilots = await Pilot.findAll();
            return res.json(pilots);
        }
        
        
    }
    async getOne(req, res){
        const {id} = req.params;
        const pilot = await Pilot.findOne({
            where:{id}
        });
        res.json(pilot);
    }

}

module.exports = new pilotController();