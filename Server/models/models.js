const sequelize = require('../db');
const {DataTypes} = require('sequelize');


const Client = sequelize.define('client', {
      id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
      role:{type: DataTypes.STRING, allowNull: false}, 
      passportSeries:{type: DataTypes.INTEGER, unique: true, allowNull: false},
      passportValidity:{type: DataTypes.DATE, allowNull: false},
      surname:{type: DataTypes.STRING, unique: true, allowNull: false},
      name:{type: DataTypes.STRING, unique: true, allowNull: false},
      password:{type: DataTypes.STRING, allowNull: false},  
       
});

const Ticket = sequelize.define('ticket', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    agentName:{type: DataTypes.STRING},
    price:{type: DataTypes.FLOAT, allowNull: false}, 
});

const Registration = sequelize.define('registration', {
    registrationDate:{type: DataTypes.DATE},
    registrationTime:{type: DataTypes.TIME},
    confirmation:{type: DataTypes.BOOLEAN},
    resonOfRefuse:{type: DataTypes.STRING}  
});

const Airport = sequelize.define('airport', {
    airportName:{type: DataTypes.STRING, allowNull: false},
    airportCountry:{type: DataTypes.STRING, allowNull: false},
    airportAddress:{type: DataTypes.STRING},
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true}, 
});

const PlaceOfDestination = sequelize.define('place_of_destination', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true}, 
});

const DeparturePoint = sequelize.define('departure_point', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true}, 
});

const Flight = sequelize.define('flight', {
    departureDate:{type: DataTypes.DATE, allowNull: false},
    arrivalDate:{type: DataTypes.DATE, allowNull: false},
    departureTime:{type: DataTypes.TIME, allowNull: false},
    arrivalTime:{type: DataTypes.TIME, allowNull: false},
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true}, 
});

const AirPlane = sequelize.define('airplane', {
    placeAmount:{type: DataTypes.INTEGER, allowNull: false},
    planeModel:{type: DataTypes.STRING, allowNull: false},
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true}, 
});

const Crew = sequelize.define('crew', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true}, 
});

const Pilot = sequelize.define('pilot', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    pilotName:{type: DataTypes.STRING, allowNull: false},
    pilotSurname:{type: DataTypes.STRING},
    workExperience:{type: DataTypes.STRING, allowNull: false},
    education:{type: DataTypes.STRING}
});

const Seat = sequelize.define('seat', {
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    seatNumber:{type: DataTypes.INTEGER, allowNull: false},
    row:{type: DataTypes.INTEGER},
    seatClass:{type: DataTypes.STRING, allowNull: false}
});

Client.hasMany(Ticket);
Ticket.belongsTo(Client);

Ticket.hasOne(Registration);
Registration.belongsTo(Ticket);

Airport.hasOne(PlaceOfDestination);
PlaceOfDestination.belongsTo(Airport);

Airport.hasOne(DeparturePoint);
DeparturePoint.belongsTo(Airport);

PlaceOfDestination.hasMany(Flight);
Flight.belongsTo(PlaceOfDestination);

DeparturePoint.hasMany(Flight);
Flight.belongsTo(DeparturePoint);

Flight.hasMany(Ticket);
Ticket.belongsTo(Flight);

AirPlane.hasMany(Flight);
Flight.belongsTo(AirPlane);

Crew.hasOne(AirPlane);
AirPlane.belongsTo(Crew);


Crew.hasMany(Pilot);
Pilot.belongsTo(Crew);

AirPlane.hasMany(Seat);
Seat.belongsTo(AirPlane);

Ticket.hasMany(Seat);
Seat.belongsTo(Ticket);

module.exports = {
    Client,
    Ticket,
    Registration,
    Airport,
    PlaceOfDestination,
    DeparturePoint,
    Flight,
    AirPlane,
    Crew,
    Pilot,
    Seat
};