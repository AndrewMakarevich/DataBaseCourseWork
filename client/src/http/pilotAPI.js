import {$authHost, $host} from './index';
import jwt_decode from "jwt-decode";


export const createPilot = async (pilotName, pilotSurname, workExperience, education, crewId) =>{

    const {data} = await $authHost.post('api/pilot', {pilotName, pilotSurname, workExperience, education, crewId});
    return alert('Пилот успешно создан');

};
export const createAirplane = async (placeAmount, planeModel, crewId) =>{

    const {data} = await $authHost.post('api/airplane', {placeAmount, planeModel, crewId});
    return alert('Самолет успешно создан');

};

export const createAirport = async (airportName, airportCountry, airportAddress) =>{

    const {data} = await $authHost.post('api/airport', {airportName, airportCountry, airportAddress});
    return alert('Аэропорт успешно создан');

};

export const createCrew = async () =>{

    const {data} = await $authHost.post('api/crew', {});
    return alert(`Команда с id: ${data.id} успешно создан`);

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