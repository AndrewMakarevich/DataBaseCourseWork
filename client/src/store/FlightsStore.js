import {makeAutoObservable} from 'mobx';

export default class FlightsStore {
    constructor(){
        this._placeOfDestinations = [
            {
                id: 1,
                airportId: 1,
                airport: {
                    id: 1,
                    airportName: "Greenfelderchester",
                    airportCountry: "Antarctica",
                    airportAddress: "74899 Brakus Terrace",
                }
            },
            {
                id: 2,
                airportId: 2,
                airport: {
                    id: 2,
                    airportName: "New Ernesttown",
                    airportCountry: "Panama",
                    airportAddress: "96394 Cloyd Parkway",
                }
            },
            {
                id: 3,
                airportId: 3,
                airport: {
                    id: 3,
                    airportName: "East Korystad",
                    airportCountry: "Panama Canal Zone",
                    airportAddress: "6959 Hunter Station",
                }
            },
            {
                id: 4,
                airportId: 4,
                airport: {
                    id: 4,
                    airportName: "Sanfordton",
                    airportCountry: "Finland",
                    airportAddress: "5293 Brandi Curve",
                }
            }
        ];
        this._departurePoints =[
            {
                id: 1,
                airportId: 1,
                airport: {
                    id: 1,
                    airportName: "Greenfelderchester",
                    airportCountry: "Antarctica",
                    airportAddress: "74899 Brakus Terrace",
                }
            },
            {
                id: 2,
                airportId: 2,
                airport: {
                    id: 2,
                    airportName: "New Ernesttown",
                    airportCountry: "Panama",
                    airportAddress: "96394 Cloyd Parkway",
                }
            },
            {
                id: 3,
                airportId: 3,
                airport: {
                    id: 3,
                    airportName: "East Korystad",
                    airportCountry: "Panama Canal Zone",
                    airportAddress: "6959 Hunter Station",
                }
            },
            {
                id: 4,
                airportId: 4,
                airport: {
                    id: 4,
                    airportName: "Sanfordton",
                    airportCountry: "Finland",
                    airportAddress: "5293 Brandi Curve",
                }
            }
        ];
        this._airplanes =[
            {
                id: 1,
                placeAmount: 100,
                planeModel: "boeing 600",
                createdAt: "2021-05-21T05:36:42.662Z",
                updatedAt: "2021-05-21T05:36:42.662Z",
                crewId: 1
            },
            {
                id: 2,
                placeAmount: 120,
                planeModel: "boeing 620",
                createdAt: "2021-05-21T05:36:51.307Z",
                updatedAt: "2021-05-21T05:36:51.307Z",
                crewId: 2
            },
            {
                id: 3,
                placeAmount: 115,
                planeModel: "boeing 515",
                createdAt: "2021-05-21T05:37:03.355Z",
                updatedAt: "2021-05-21T05:37:03.355Z",
                crewId: 3
            }
        ];
        this._airports =[
          {
            id: 1,
            airportName: "Greenfelderchester",
            airportCountry: "Antarctica",
            airportAddress: "74899 Brakus Terrace"
          },
          {
            id: 2,
            airportName: "New Ernesttown",
            airportCountry: "Panama",
            airportAddress: "96394 Cloyd Parkway" 
          },
          {
            id: 3,
            airportName: "East Korystad",
            airportCountry: "Panama Canal Zone",
            airportAddress: "6959 Hunter Station"
          },
          {
            id: 4,
            airportName: "Sanfordton",
            airportCountry: "Finland",
            airportAddress: "5293 Brandi Curve"
          }
        ];
        this._flights =[
            {
                departureDate: "2021-07-28T06:18:45.063Z",
                arrivalDate: "2021-07-28T23:48:47.204Z",
                departureTime: "17:10:26",
                arrivalTime: "21:23:19",
                id: 3,
                placeOfDestinationId: 1,
                departurePointId: 2,
                airplaneId: 1,
                airplane: {
                    id: 1,
                    placeAmount: 100,
                    planeModel: "boeing 600",
                    crewId: 1
                }
            },
            {
                departureDate: "2021-09-28T06:18:45.063Z",
                arrivalDate: "2021-09-28T23:48:47.204Z",
                departureTime: "19:10:26",
                arrivalTime: "23:23:19",
                id: 3,
                placeOfDestinationId: 3,
                departurePointId: 2,
                airplaneId: 1,
                airplane: {
                    id: 1,
                    placeAmount: 100,
                    planeModel: "boeing 600",
                    crewId: 1
                }
            },
            {
                departureDate: "2021-05-28T06:18:45.063Z",
                arrivalDate: "2021-05-28T23:48:47.204Z",
                departureTime: "15:10:26",
                arrivalTime: "20:23:19",
                id: 3,
                placeOfDestinationId: 2,
                departurePointId: 4,
                airplaneId: 1,
                airplane: {
                    id: 1,
                    placeAmount: 100,
                    planeModel: "boeing 600",
                    crewId: 1
                }
            }
        ];
        makeAutoObservable(this);
    }

    setPlaceOdDestinations(PlaceOdDestinations){
        this._placeOfDestinations = PlaceOdDestinations;
    }

    setDeparturePoints(DeparturePoints){
        this._departurePoints = DeparturePoints;
    }
    setAirplanes(Airplanes){
        this._airplanes = Airplanes;
    }
    setAirports(Airports){
        this._airports = Airports;
    }
    setFlights(Flights){
        this._flights = Flights;
    }

    get PlaceOdDestinations(){
        return this._placeOfDestinations;
    }
    get DeparturePoints(){
        return this._departurePoints;
    }
    get Airplanes(){
        return this._airplanes;
    }
    get Airports(){
        return this._airports;
    }
    get Flights(){
        return this._flights;
    }
}