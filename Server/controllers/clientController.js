class ClientController{
    async registration(req, res){

    }
    async login(req, res){
        
    }
    async check(req, res){
        const query = req.query; //Получение параметров строки запроса
        res.json(query);
    }
}

module.exports = new ClientController();