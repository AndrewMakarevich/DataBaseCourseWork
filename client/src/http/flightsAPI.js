import {$authHost, $host} from './index';
import jwt_decode from "jwt-decode";


export const createPilot = async (pilotName, pilotSurname, workExperience, education, crewId) =>{

    const {data} = await $authHost.post('api/pilot', {pilotName, pilotSurname, workExperience, education, crewId});
    return alert('Пилот успешно создан');

};

export const getPilots = async () =>{

    const {data} = await $host.get('api/pilot', {});
    return data;

};


export const createAirplane = async (placeAmount, planeModel, crewId) =>{

    const {data} = await $authHost.post('api/airplane', {placeAmount, planeModel, crewId});
    return alert('Самолет успешно создан');

};

export const getAirplanes = async () =>{

    const {data} = await $host.get('api/airplane', {});
    return data;

};

export const createAirport = async (airportName, airportCountry, airportAddress) =>{

    const {data} = await $authHost.post('api/airport', {airportName, airportCountry, airportAddress});
    return alert('Аэропорт успешно создан');

};

export const getAirports = async () =>{

    const {data} = await $host.get('api/airport', {});
    return data;

};

export const createCrew = async () =>{

    const {data} = await $authHost.post('api/crew', {});
    return alert(`Команда с id: ${data.id} успешно создан`);

};
export const getCrews = async () =>{

    const {data} = await $host.get('api/crew', {});
    return data;

};

export const getDeparturePoints = async () =>{

    const {data} = await $host.get('api/departure', {});
    return data;

};

export const getPlaceOfDestinations = async () =>{

    const {data} = await $host.get('api/destination', {});
    return data;

};

export const createFlight = async (departureDate, arrivalDate, departureTime, arrivalTime, placeOfDestinationId, departurePointId, airplaneId) =>{

    const {data} = await $authHost.post('api/flight', {departureDate, arrivalDate, departureTime, arrivalTime, placeOfDestinationId, departurePointId, airplaneId});
    return alert(`Рейс с id: ${data.id} успешно создан`);

};

export const getFlights = async () =>{

    const {data} = await $host.get('api/flight', {});
    return data;

};

// export const login = async (email, password) =>{

//     const {data} = await $host.post('api/client/login', {email, password, role:'ADMIN'});
//     localStorage.setItem('token', data.token);
//     return jwt_decode(data.token);

// };
// export const check = async () =>{

//     const {data} = await $authHost.get('api/client/auth');
//     localStorage.setItem('token', data.token);
//     return jwt_decode(data.token);

// };