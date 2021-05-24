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
            },
            {
                "id": 7,
                "placeAmount": 120,
                "planeModel": "boeing 800",
                "createdAt": "2021-05-23T16:54:46.779Z",
                "updatedAt": "2021-05-23T16:54:46.779Z",
                "crewId": 1,
                "seats": [
                    {
                        "id": 121,
                        "seatNumber": 1,
                        "row": 1,
                        "seatClass": "A",
                        "createdAt": "2021-05-23T16:54:46.856Z",
                        "updatedAt": "2021-05-23T16:54:46.856Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 122,
                        "seatNumber": 2,
                        "row": 1,
                        "seatClass": "A",
                        "createdAt": "2021-05-23T16:54:46.859Z",
                        "updatedAt": "2021-05-23T16:54:46.859Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 123,
                        "seatNumber": 3,
                        "row": 1,
                        "seatClass": "A",
                        "createdAt": "2021-05-23T16:54:46.861Z",
                        "updatedAt": "2021-05-23T16:54:46.861Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 124,
                        "seatNumber": 4,
                        "row": 1,
                        "seatClass": "A",
                        "createdAt": "2021-05-23T16:54:46.863Z",
                        "updatedAt": "2021-05-23T16:54:46.863Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 125,
                        "seatNumber": 5,
                        "row": 1,
                        "seatClass": "A",
                        "createdAt": "2021-05-23T16:54:46.866Z",
                        "updatedAt": "2021-05-23T16:54:46.866Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 126,
                        "seatNumber": 6,
                        "row": 1,
                        "seatClass": "A",
                        "createdAt": "2021-05-23T16:54:46.868Z",
                        "updatedAt": "2021-05-23T16:54:46.868Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 127,
                        "seatNumber": 7,
                        "row": 2,
                        "seatClass": "A",
                        "createdAt": "2021-05-23T16:54:46.870Z",
                        "updatedAt": "2021-05-23T16:54:46.870Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 128,
                        "seatNumber": 8,
                        "row": 2,
                        "seatClass": "A",
                        "createdAt": "2021-05-23T16:54:46.872Z",
                        "updatedAt": "2021-05-23T16:54:46.872Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 129,
                        "seatNumber": 9,
                        "row": 2,
                        "seatClass": "A",
                        "createdAt": "2021-05-23T16:54:46.873Z",
                        "updatedAt": "2021-05-23T16:54:46.873Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 130,
                        "seatNumber": 10,
                        "row": 2,
                        "seatClass": "A",
                        "createdAt": "2021-05-23T16:54:46.875Z",
                        "updatedAt": "2021-05-23T16:54:46.875Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 131,
                        "seatNumber": 11,
                        "row": 2,
                        "seatClass": "A",
                        "createdAt": "2021-05-23T16:54:46.877Z",
                        "updatedAt": "2021-05-23T16:54:46.877Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 132,
                        "seatNumber": 12,
                        "row": 2,
                        "seatClass": "A",
                        "createdAt": "2021-05-23T16:54:46.879Z",
                        "updatedAt": "2021-05-23T16:54:46.879Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 133,
                        "seatNumber": 13,
                        "row": 3,
                        "seatClass": "B",
                        "createdAt": "2021-05-23T16:54:46.880Z",
                        "updatedAt": "2021-05-23T16:54:46.880Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 134,
                        "seatNumber": 14,
                        "row": 3,
                        "seatClass": "B",
                        "createdAt": "2021-05-23T16:54:46.882Z",
                        "updatedAt": "2021-05-23T16:54:46.882Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 135,
                        "seatNumber": 15,
                        "row": 3,
                        "seatClass": "B",
                        "createdAt": "2021-05-23T16:54:46.884Z",
                        "updatedAt": "2021-05-23T16:54:46.884Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 136,
                        "seatNumber": 16,
                        "row": 3,
                        "seatClass": "B",
                        "createdAt": "2021-05-23T16:54:46.885Z",
                        "updatedAt": "2021-05-23T16:54:46.885Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 137,
                        "seatNumber": 17,
                        "row": 3,
                        "seatClass": "B",
                        "createdAt": "2021-05-23T16:54:46.887Z",
                        "updatedAt": "2021-05-23T16:54:46.887Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 138,
                        "seatNumber": 18,
                        "row": 3,
                        "seatClass": "B",
                        "createdAt": "2021-05-23T16:54:46.889Z",
                        "updatedAt": "2021-05-23T16:54:46.889Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 139,
                        "seatNumber": 19,
                        "row": 4,
                        "seatClass": "B",
                        "createdAt": "2021-05-23T16:54:46.891Z",
                        "updatedAt": "2021-05-23T16:54:46.891Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 140,
                        "seatNumber": 20,
                        "row": 4,
                        "seatClass": "B",
                        "createdAt": "2021-05-23T16:54:46.893Z",
                        "updatedAt": "2021-05-23T16:54:46.893Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 141,
                        "seatNumber": 21,
                        "row": 4,
                        "seatClass": "B",
                        "createdAt": "2021-05-23T16:54:46.894Z",
                        "updatedAt": "2021-05-23T16:54:46.894Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 142,
                        "seatNumber": 22,
                        "row": 4,
                        "seatClass": "B",
                        "createdAt": "2021-05-23T16:54:46.896Z",
                        "updatedAt": "2021-05-23T16:54:46.896Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 143,
                        "seatNumber": 23,
                        "row": 4,
                        "seatClass": "B",
                        "createdAt": "2021-05-23T16:54:46.898Z",
                        "updatedAt": "2021-05-23T16:54:46.898Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 144,
                        "seatNumber": 24,
                        "row": 4,
                        "seatClass": "B",
                        "createdAt": "2021-05-23T16:54:46.900Z",
                        "updatedAt": "2021-05-23T16:54:46.900Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 145,
                        "seatNumber": 25,
                        "row": 5,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.902Z",
                        "updatedAt": "2021-05-23T16:54:46.902Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 146,
                        "seatNumber": 26,
                        "row": 5,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.903Z",
                        "updatedAt": "2021-05-23T16:54:46.903Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 147,
                        "seatNumber": 27,
                        "row": 5,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.905Z",
                        "updatedAt": "2021-05-23T16:54:46.905Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 148,
                        "seatNumber": 28,
                        "row": 5,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.907Z",
                        "updatedAt": "2021-05-23T16:54:46.907Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 149,
                        "seatNumber": 29,
                        "row": 5,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.909Z",
                        "updatedAt": "2021-05-23T16:54:46.909Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 150,
                        "seatNumber": 30,
                        "row": 5,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.911Z",
                        "updatedAt": "2021-05-23T16:54:46.911Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 151,
                        "seatNumber": 31,
                        "row": 6,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.913Z",
                        "updatedAt": "2021-05-23T16:54:46.913Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 152,
                        "seatNumber": 32,
                        "row": 6,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.914Z",
                        "updatedAt": "2021-05-23T16:54:46.914Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 153,
                        "seatNumber": 33,
                        "row": 6,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.916Z",
                        "updatedAt": "2021-05-23T16:54:46.916Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 154,
                        "seatNumber": 34,
                        "row": 6,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.918Z",
                        "updatedAt": "2021-05-23T16:54:46.918Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 155,
                        "seatNumber": 35,
                        "row": 6,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.919Z",
                        "updatedAt": "2021-05-23T16:54:46.919Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 156,
                        "seatNumber": 36,
                        "row": 6,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.921Z",
                        "updatedAt": "2021-05-23T16:54:46.921Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 157,
                        "seatNumber": 37,
                        "row": 7,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.923Z",
                        "updatedAt": "2021-05-23T16:54:46.923Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 158,
                        "seatNumber": 38,
                        "row": 7,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.924Z",
                        "updatedAt": "2021-05-23T16:54:46.924Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 159,
                        "seatNumber": 39,
                        "row": 7,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.926Z",
                        "updatedAt": "2021-05-23T16:54:46.926Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 160,
                        "seatNumber": 40,
                        "row": 7,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.928Z",
                        "updatedAt": "2021-05-23T16:54:46.928Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 161,
                        "seatNumber": 41,
                        "row": 7,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.929Z",
                        "updatedAt": "2021-05-23T16:54:46.929Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 162,
                        "seatNumber": 42,
                        "row": 7,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.931Z",
                        "updatedAt": "2021-05-23T16:54:46.931Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 163,
                        "seatNumber": 43,
                        "row": 8,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.933Z",
                        "updatedAt": "2021-05-23T16:54:46.933Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 164,
                        "seatNumber": 44,
                        "row": 8,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.935Z",
                        "updatedAt": "2021-05-23T16:54:46.935Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 165,
                        "seatNumber": 45,
                        "row": 8,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.938Z",
                        "updatedAt": "2021-05-23T16:54:46.938Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 166,
                        "seatNumber": 46,
                        "row": 8,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.940Z",
                        "updatedAt": "2021-05-23T16:54:46.940Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 167,
                        "seatNumber": 47,
                        "row": 8,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.942Z",
                        "updatedAt": "2021-05-23T16:54:46.942Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 168,
                        "seatNumber": 48,
                        "row": 8,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.944Z",
                        "updatedAt": "2021-05-23T16:54:46.944Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 169,
                        "seatNumber": 49,
                        "row": 9,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.946Z",
                        "updatedAt": "2021-05-23T16:54:46.946Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 170,
                        "seatNumber": 50,
                        "row": 9,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.947Z",
                        "updatedAt": "2021-05-23T16:54:46.947Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 171,
                        "seatNumber": 51,
                        "row": 9,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.949Z",
                        "updatedAt": "2021-05-23T16:54:46.949Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 172,
                        "seatNumber": 52,
                        "row": 9,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.951Z",
                        "updatedAt": "2021-05-23T16:54:46.951Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 173,
                        "seatNumber": 53,
                        "row": 9,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.953Z",
                        "updatedAt": "2021-05-23T16:54:46.953Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 174,
                        "seatNumber": 54,
                        "row": 9,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.955Z",
                        "updatedAt": "2021-05-23T16:54:46.955Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 175,
                        "seatNumber": 55,
                        "row": 10,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.957Z",
                        "updatedAt": "2021-05-23T16:54:46.957Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 176,
                        "seatNumber": 56,
                        "row": 10,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.960Z",
                        "updatedAt": "2021-05-23T16:54:46.960Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 177,
                        "seatNumber": 57,
                        "row": 10,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.962Z",
                        "updatedAt": "2021-05-23T16:54:46.962Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 178,
                        "seatNumber": 58,
                        "row": 10,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.963Z",
                        "updatedAt": "2021-05-23T16:54:46.963Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 179,
                        "seatNumber": 59,
                        "row": 10,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.965Z",
                        "updatedAt": "2021-05-23T16:54:46.965Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 180,
                        "seatNumber": 60,
                        "row": 10,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.967Z",
                        "updatedAt": "2021-05-23T16:54:46.967Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 181,
                        "seatNumber": 61,
                        "row": 11,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.969Z",
                        "updatedAt": "2021-05-23T16:54:46.969Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 182,
                        "seatNumber": 62,
                        "row": 11,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.970Z",
                        "updatedAt": "2021-05-23T16:54:46.970Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 183,
                        "seatNumber": 63,
                        "row": 11,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.972Z",
                        "updatedAt": "2021-05-23T16:54:46.972Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 184,
                        "seatNumber": 64,
                        "row": 11,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.973Z",
                        "updatedAt": "2021-05-23T16:54:46.973Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 185,
                        "seatNumber": 65,
                        "row": 11,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.975Z",
                        "updatedAt": "2021-05-23T16:54:46.975Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 186,
                        "seatNumber": 66,
                        "row": 11,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.977Z",
                        "updatedAt": "2021-05-23T16:54:46.977Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 187,
                        "seatNumber": 67,
                        "row": 12,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.978Z",
                        "updatedAt": "2021-05-23T16:54:46.978Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 188,
                        "seatNumber": 68,
                        "row": 12,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.980Z",
                        "updatedAt": "2021-05-23T16:54:46.980Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 189,
                        "seatNumber": 69,
                        "row": 12,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.982Z",
                        "updatedAt": "2021-05-23T16:54:46.982Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 190,
                        "seatNumber": 70,
                        "row": 12,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.983Z",
                        "updatedAt": "2021-05-23T16:54:46.983Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 191,
                        "seatNumber": 71,
                        "row": 12,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.984Z",
                        "updatedAt": "2021-05-23T16:54:46.984Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 192,
                        "seatNumber": 72,
                        "row": 12,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.986Z",
                        "updatedAt": "2021-05-23T16:54:46.986Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 193,
                        "seatNumber": 73,
                        "row": 13,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.988Z",
                        "updatedAt": "2021-05-23T16:54:46.988Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 194,
                        "seatNumber": 74,
                        "row": 13,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.990Z",
                        "updatedAt": "2021-05-23T16:54:46.990Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 195,
                        "seatNumber": 75,
                        "row": 13,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.993Z",
                        "updatedAt": "2021-05-23T16:54:46.993Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 196,
                        "seatNumber": 76,
                        "row": 13,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.995Z",
                        "updatedAt": "2021-05-23T16:54:46.995Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 197,
                        "seatNumber": 77,
                        "row": 13,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.996Z",
                        "updatedAt": "2021-05-23T16:54:46.996Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 198,
                        "seatNumber": 78,
                        "row": 13,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:46.998Z",
                        "updatedAt": "2021-05-23T16:54:46.998Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 199,
                        "seatNumber": 79,
                        "row": 14,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.000Z",
                        "updatedAt": "2021-05-23T16:54:47.000Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 200,
                        "seatNumber": 80,
                        "row": 14,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.001Z",
                        "updatedAt": "2021-05-23T16:54:47.001Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 201,
                        "seatNumber": 81,
                        "row": 14,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.003Z",
                        "updatedAt": "2021-05-23T16:54:47.003Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 202,
                        "seatNumber": 82,
                        "row": 14,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.004Z",
                        "updatedAt": "2021-05-23T16:54:47.004Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 203,
                        "seatNumber": 83,
                        "row": 14,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.006Z",
                        "updatedAt": "2021-05-23T16:54:47.006Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 204,
                        "seatNumber": 84,
                        "row": 14,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.007Z",
                        "updatedAt": "2021-05-23T16:54:47.007Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 205,
                        "seatNumber": 85,
                        "row": 15,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.009Z",
                        "updatedAt": "2021-05-23T16:54:47.009Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 206,
                        "seatNumber": 86,
                        "row": 15,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.011Z",
                        "updatedAt": "2021-05-23T16:54:47.011Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 207,
                        "seatNumber": 87,
                        "row": 15,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.013Z",
                        "updatedAt": "2021-05-23T16:54:47.013Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 208,
                        "seatNumber": 88,
                        "row": 15,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.014Z",
                        "updatedAt": "2021-05-23T16:54:47.014Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 209,
                        "seatNumber": 89,
                        "row": 15,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.016Z",
                        "updatedAt": "2021-05-23T16:54:47.016Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 210,
                        "seatNumber": 90,
                        "row": 15,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.018Z",
                        "updatedAt": "2021-05-23T16:54:47.018Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 211,
                        "seatNumber": 91,
                        "row": 16,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.019Z",
                        "updatedAt": "2021-05-23T16:54:47.019Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 212,
                        "seatNumber": 92,
                        "row": 16,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.021Z",
                        "updatedAt": "2021-05-23T16:54:47.021Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 213,
                        "seatNumber": 93,
                        "row": 16,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.023Z",
                        "updatedAt": "2021-05-23T16:54:47.023Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 214,
                        "seatNumber": 94,
                        "row": 16,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.024Z",
                        "updatedAt": "2021-05-23T16:54:47.024Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 215,
                        "seatNumber": 95,
                        "row": 16,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.026Z",
                        "updatedAt": "2021-05-23T16:54:47.026Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 216,
                        "seatNumber": 96,
                        "row": 16,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.028Z",
                        "updatedAt": "2021-05-23T16:54:47.028Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 217,
                        "seatNumber": 97,
                        "row": 17,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.030Z",
                        "updatedAt": "2021-05-23T16:54:47.030Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 218,
                        "seatNumber": 98,
                        "row": 17,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.031Z",
                        "updatedAt": "2021-05-23T16:54:47.031Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 219,
                        "seatNumber": 99,
                        "row": 17,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.033Z",
                        "updatedAt": "2021-05-23T16:54:47.033Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 220,
                        "seatNumber": 100,
                        "row": 17,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.035Z",
                        "updatedAt": "2021-05-23T16:54:47.035Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 221,
                        "seatNumber": 101,
                        "row": 17,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.037Z",
                        "updatedAt": "2021-05-23T16:54:47.037Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 222,
                        "seatNumber": 102,
                        "row": 17,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.038Z",
                        "updatedAt": "2021-05-23T16:54:47.038Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 223,
                        "seatNumber": 103,
                        "row": 18,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.040Z",
                        "updatedAt": "2021-05-23T16:54:47.040Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 224,
                        "seatNumber": 104,
                        "row": 18,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.042Z",
                        "updatedAt": "2021-05-23T16:54:47.042Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 225,
                        "seatNumber": 105,
                        "row": 18,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.044Z",
                        "updatedAt": "2021-05-23T16:54:47.044Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 226,
                        "seatNumber": 106,
                        "row": 18,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.045Z",
                        "updatedAt": "2021-05-23T16:54:47.045Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 227,
                        "seatNumber": 107,
                        "row": 18,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.047Z",
                        "updatedAt": "2021-05-23T16:54:47.047Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 228,
                        "seatNumber": 108,
                        "row": 18,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.049Z",
                        "updatedAt": "2021-05-23T16:54:47.049Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 229,
                        "seatNumber": 109,
                        "row": 19,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.050Z",
                        "updatedAt": "2021-05-23T16:54:47.050Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 230,
                        "seatNumber": 110,
                        "row": 19,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.052Z",
                        "updatedAt": "2021-05-23T16:54:47.052Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 231,
                        "seatNumber": 111,
                        "row": 19,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.053Z",
                        "updatedAt": "2021-05-23T16:54:47.053Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 232,
                        "seatNumber": 112,
                        "row": 19,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.055Z",
                        "updatedAt": "2021-05-23T16:54:47.055Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 233,
                        "seatNumber": 113,
                        "row": 19,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.057Z",
                        "updatedAt": "2021-05-23T16:54:47.057Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 234,
                        "seatNumber": 114,
                        "row": 19,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.059Z",
                        "updatedAt": "2021-05-23T16:54:47.059Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 235,
                        "seatNumber": 115,
                        "row": 20,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.061Z",
                        "updatedAt": "2021-05-23T16:54:47.061Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 236,
                        "seatNumber": 116,
                        "row": 20,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.062Z",
                        "updatedAt": "2021-05-23T16:54:47.062Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 237,
                        "seatNumber": 117,
                        "row": 20,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.064Z",
                        "updatedAt": "2021-05-23T16:54:47.064Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 238,
                        "seatNumber": 118,
                        "row": 20,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.065Z",
                        "updatedAt": "2021-05-23T16:54:47.065Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 239,
                        "seatNumber": 119,
                        "row": 20,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.067Z",
                        "updatedAt": "2021-05-23T16:54:47.067Z",
                        "airplaneId": 7,
                        "ticketId": null
                    },
                    {
                        "id": 240,
                        "seatNumber": 120,
                        "row": 20,
                        "seatClass": "C",
                        "createdAt": "2021-05-23T16:54:47.068Z",
                        "updatedAt": "2021-05-23T16:54:47.068Z",
                        "airplaneId": 7,
                        "ticketId": null
                    }
                ]
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
                id: 1,
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
                id: 2,
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
            },
            {
                departureDate: "2021-07-28T06:18:45.063Z",
                arrivalDate: "2021-07-28T23:48:47.204Z",
                departureTime: "17:10:26",
                arrivalTime: "21:23:19",
                id: 4,
                placeOfDestinationId: 1,
                departurePointId: 3,
                airplaneId: 7,
                airplane: {
                    "id": 7,
                    "placeAmount": 120,
                    "planeModel": "boeing 800",
                    "crewId": 1
                }
            },
        ];
        this._pilots=[

        ];
        makeAutoObservable(this);
    }

    setPlaceOfDestinations(PlaceOfDestinations){
        this._placeOfDestinations = PlaceOfDestinations;
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
    setPilots(Pilots){
        this._pilots = Pilots;
    }

    get PlaceOfDestinations(){
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
    get Pilots(){
        return this._pilots;
    }
}