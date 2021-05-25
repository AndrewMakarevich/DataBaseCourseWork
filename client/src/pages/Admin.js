import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import {createPilot,getPilots, createAirplane,getAirplanes, createAirport,getAirports, createCrew,getCrews, getDeparturePoints, getPlaceOfDestinations, createFlight, getFlights} from '../http/flightsAPI';
import { Context } from '..';
import './Admin.css';
import './AdminModal.js';
import { useHistory } from 'react-router';
import { ADMIN_ROUTE } from '../utils/consts';

const Admin = observer(()=>{
    const {flight} = useContext(Context);
    const {user} = useContext(Context);
    // PILOT
    const [pilotName, setPilotName] = useState('');
    const [pilotSurname, setPilotSurname] = useState('');
    const [workExperience, setWorkExperience] = useState('');
    const [education, setEducation] = useState('');
    const [crewId, setCrewId] = useState('');

    // AIRPLANE
    const [placeAmount, setPlaceAmount] = useState('');
    const [planeModel, setPlaneModel] = useState('');

    // AIRPORT
    const [airportName, setAirportName] = useState('');
    const [airportCountry, setAirportCountry] = useState('');
    const [airportAddress, setAirportAddress] = useState('');

    // FLIGHT
    const [departureDate, setDepartureDate] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [arrivalTime, setArrivalTime] = useState('');
    const [departurePointId, setDeparturePoint] = useState('');
    const [placeOfDestinationId, setPlaceOfDestination] = useState('');
    const [airplaneId, setAirplaneId] = useState('');





    const click = async (e)=> {
        if(e.target.className == "addPilotButton"){
            try{
                let data;

                    // console.log(pilotName, pilotSurname, workExperience, education, crewId);

                    data = await createPilot(pilotName, pilotSurname, workExperience, education, crewId);

                    getPilots().then(data => flight.setPilots(data));

                    // flight.setPilots(data);
                    

            }catch(e){
                // alert(e.response.data.message);
            }  
        }else if(e.target.className == "addAirplaneButton"){
            try{
                let data;

                    data = await createAirplane(placeAmount, planeModel, crewId);

                    getAirplanes().then(data => flight.setAirplanes(data));

                    // flight.setAirplanes(data);

            }catch(e){
                alert(e.response.data.message);
            } 
        }else if(e.target.className == "addAirportButton"){
            try{
                let data;

                    data = await createAirport(airportName, airportCountry, airportAddress);

                    getAirports().then(data=> flight.setAirports(data));

                    // flight.setAirports(data);

            }catch(e){
                alert(e.response.data.message);
            } 
        }else if(e.target.className == "addCrewButton"){
            try{
                let data;

                    data = await createCrew(airportName, airportCountry, airportAddress);

                    getCrews().then(data => flight.setCrews(data));


            }catch(e){
                alert(e.response.data.message);
            } 
        }else if(e.target.className == "addFlightButton"){
            try{
                let data;
                console.log(departureDate, arrivalDate, departureTime, arrivalTime, placeOfDestinationId, departurePointId, airplaneId);

                    data = await createFlight(departureDate, arrivalDate, departureTime, arrivalTime, placeOfDestinationId, departurePointId, airplaneId);

                    getFlights().then(data => flight.setFlights(data));


            }catch(e){
                alert(e.response.data.message);
            }
        }
        
        
    };

    useEffect(()=>{

        getPilots().then(data => flight.setPilots(data));

        getAirplanes().then(data => flight.setAirplanes(data));

        getAirports().then(data=> flight.setAirports(data));

        getCrews().then(data => flight.setCrews(data));

        getDeparturePoints().then(data => flight.setDeparturePoints(data));

        getPlaceOfDestinations().then(data=> flight.setPlaceOfDestinations(data));

        getFlights().then(data => flight.setFlights(data));



    }, []);




    return(
        <div>
            <div className="adminEmail">Admin email: {user._user.email}</div>
            <div className="createButtons">
                <button className="PilotButton">Добавить пилота</button>
                <button className="AirplaneButton">Добавить самолет</button>
                <button className="AirportButton">Добавить аэропорт</button>
                <button className="CrewButton">Добавить команду</button>  
                <button className="FlightButton">Добавить рейс</button>  
            </div>
            <div className="checkButtons">
                <button className="PilotButton">Таблица пилотов</button>
                <button className="AirplaneButton">Таблица самолетов</button>
                <button className="AirportButton">Таблица аэропортов</button>
                <button className="CrewButton">Таблица команд</button>  
                <button className="FlightButton">Таблица рейсов</button>
            </div>
           

           
           
            <div className="pilotsTable hide">
                <button className="closeTableButton">Close table</button>
                    <div className="pilotsName">
                        Имя пилота <br/>
                    {flight.Pilots.map(pilot=>
                        <div> {pilot.pilotName}</div>
                        )} 
                    </div>
                    <div className="pilotsSurname">
                        Фамилия пилота <br/>
                    {flight.Pilots.map(pilot=>
                        <div> {pilot.pilotSurname}</div>
                        )}  
                    </div>
                    <div className="pilotsWorkExperience">
                        Стаж пилота <br/>
                    {flight.Pilots.map(pilot=>
                        <div> {pilot.workExperience}</div>
                        )}  
                    </div>
                    <div className="pilotsEducation">
                        Образование пилота <br/>
                    {flight.Pilots.map(pilot=>
                        <div> {pilot.education}</div>
                        )}  
                    </div>
                    <div className="pilotsCrew">
                        Команда пилота <br/>
                    {flight.Pilots.map(pilot=>
                        <div> {pilot.crewId}</div>
                        )}  
                    </div>
                    
                </div>
                
            <div className = "airplanesTable hide">
                <button className="closeTableButton">Close table</button>
                <div className="airplnaId">Идентификатор<br/>
                        {flight.Airplanes.map(airplane=>
                            <div>{airplane.id}</div>
                            )}
                </div>
                <div className="placeAmount">Ко-во мест<br/>
                        {flight.Airplanes.map(airplane=>
                            <div>{airplane.placeAmount}</div>
                            )}
                </div>
                <div className="planeModel">Модель самолета<br/>
                        {flight.Airplanes.map(airplane=>
                                <div>{airplane.planeModel}</div>
                                )}
                </div>
                <div className="crewId">Команда самолета<br/>
                        {flight.Airplanes.map(airplane=>
                                <div>{airplane.crewId}</div>
                                )}
                </div>
            </div>

            <div className = "airportsTable hide">
                <button className="closeTableButton">Close table</button>
                <div className="airportName">Название аэропорта<br/>
                        {flight.Airports.map(airport=>
                                <div>{airport.airportName}</div>
                            )}
                </div>
                <div className="airportName">Страна<br/>
                        {flight.Airports.map(airport=>
                                <div>{airport.airportCountry}</div>
                            )}
                </div>
                <div className="airportAddress">Адрес<br/>
                        {flight.Airports.map(airport=>
                                <div>{airport.airportAddress}</div>
                            )}
                </div>
            </div>

            <div className = "flightsTable">
                <button className="closeTableButton">Close table</button>
                <div className="flightId">Идентификатор<br/>
                        {flight.Flights.map(flight=>
                                <div>{flight.id}</div>
                            )}
                </div>     
                <div className="departureDate">Дата отправления<br/>
                        {flight.Flights.map(flight=>
                                <div>{flight.departureDate}</div>
                            )}
                </div> 
                <div className="departureTime">Время отправления<br/>
                        {flight.Flights.map(flight=>
                                <div>{flight.departureTime}</div>
                            )}
                </div> 
                <div className="arrivalDate">Дата прибытия<br/>
                        {flight.Flights.map(flight=>
                                <div>{flight.arrivalDate}</div>
                            )}
                </div> 
                <div className="arrivalTime">Время прибытия<br/>
                        {flight.Flights.map(flight=>
                                <div>{flight.arrivalTime}</div>
                            )}
                </div>
                <div className="departurePoint">Место отправления<br/>
                        {flight.Flights.map(Flight=>
                            flight.Airports.map(airport=>
                                airport.id == Flight.departurePointId ?
                                    <div>{airport.airportName}</div>
                                    :
                                    null
                                )
                                
                            )}
                </div>
                <div className="departurePoint">Место прибытия<br/>
                        {flight.Flights.map(Flight=>
                            flight.Airports.map(airport=>
                                airport.id == Flight.placeOfDestinationId ?
                                    <div>{airport.airportName}</div>
                                    :
                                    null
                                )
                                
                            )}
                </div>
                <div className="airplane">Обслуживающий самолет<br/>
                        {flight.Flights.map(Flight=>
                            flight.Airplanes.map(airplane=>
                                airplane.id == Flight.airplaneId ?
                                    <div>{airplane.planeModel}</div>
                                    :
                                    null
                                )
                                
                            )}
                </div>
            </div>

            <div className="modalBackgroundPilot hide">
                    <div className="modalWindowPilot">
                        <h2>Добавление пилота</h2>
                        <div className="pilotInput">
                            <input type="text" id="pilotName" placeholder="Введите имя пилота" required value={pilotName} onChange={e=>setPilotName(e.target.value)}></input>
                            <input type="text" id="pilotSurname" placeholder="Введите фамилию пилота" required value={pilotSurname} onChange={e=>setPilotSurname(e.target.value)}></input>
                            <input type="text" id="workExperience" placeholder="Введите стаж пилота (лет)" required value={workExperience} onChange={e=>setWorkExperience(e.target.value)}></input>
                            <input type="text" id="education" placeholder="Введите образование пилота" required value={education} onChange={e=>setEducation(e.target.value)}></input>
                            <label for="crewId">Выберите команду пилота</label>
                            <select id="crewId" value={crewId} onChange={e=>setCrewId(e.target.value)}>
                                <option></option>
                                {flight.Crews.map(crew=>
                                <option>{crew.id}</option>
                                    )}
                            </select>
                        </div>
                            
                        <button className="addPilotButton" onClick={click}>Добавить в базу</button>
                        <button className="closeModalButton">Close</button>
                    </div>
            </div>

            <div className="modalBackgroundAirplane hide">
                    <div className="modalWindowAirplane">
                        <h2>Добавление самолета</h2>
                        <div className="airplaneInput">
                            <input type="text" id="placeAmount" placeholder="Введите кол-во мест в самолете" required value={placeAmount} onChange={e=>setPlaceAmount(e.target.value)}></input>
                            <input type="text" id="planeModel" placeholder="Введите модель самолета" required value={planeModel} onChange={e=>setPlaneModel(e.target.value)}></input>
                            
                            <label for="crewId">Выберите команду, обслуживающую самолет</label>
                            <select id="crewId" value={crewId} onChange={e=>setCrewId(e.target.value)}>
                                {flight.Crews.map(crew=>
                                <option>{crew.id}</option>
                                    )}
                            </select>
                            
                        </div>

                        <button className="addAirplaneButton" onClick={click}>Добавить в базу</button>
                        <button className="closeModalButton">Close</button>
                    </div>
            </div>

            <div className="modalBackgroundAirport hide">
                    <div className="modalWindowAirport">
                        <h2>Добавление аэропорта</h2>
                        <div className="airportInput">
                            <input type="text" id="airportName" placeholder="Введите название аэропорта" required value={airportName} onChange={e=>setAirportName(e.target.value)}></input>
                            
                            <label for="airportCountry">Введите страну аэропорта</label>
                            <select id="airportCountry" value={airportCountry} onChange={e=>setAirportCountry(e.target.value)}>
                                {flight.Countries.map(country=>
                                <option>{country.name}</option>
                                    )}
                            </select>

                            <input type="text" id="airportAddress" placeholder="Введите адрес аэропорта (город включительно)" required value={airportAddress} onChange={e=>setAirportAddress(e.target.value)}></input>
                        </div>

                        <button className="addAirportButton" onClick={click}>Добавить в базу</button>
                        <button className="closeModalButton">Close</button>
                    </div>
            </div>

            <div className="modalBackgroundCrew hide">
                <div className="modalWindowCrew">
                    <h2>Добавление команды</h2> <br/>
                    <button className="addCrewButton" onClick={click}>Добавить в базу</button>
                    <button className="closeModalButton">Close</button>
                </div>
           </div>

           <div className="modalBackgroundFlight hide">
               <div className="modalWindowFlight">
                   <h2>Добавление рейса</h2>
                   <div className="flightInput">
                        <label for="departureDate">Дата отбытия</label>
                        <input id="departureDate" type="date" className="departureDate" value={departureDate} onChange={e=>setDepartureDate(e.target.value)}></input>
                        <label for="arrivalDate">Дата прибытия</label>
                        <input id="arrivalDate" type="date" className="arrivalDate" value={arrivalDate} onChange={e=>setArrivalDate(e.target.value)}></input>

                        <label for="departureTime">Время отбытия</label>
                        <input id="departureTime" type="time" className="departureTime" value={departureTime} onChange={e=>setDepartureTime(e.target.value)}></input>
                        <label for="arrivalTime">Время прибытия</label>
                        <input id="arrivalTime" type="time" className="arrivalTime" value={arrivalTime} onChange={e=>setArrivalTime(e.target.value)}></input>

                        <label for="placeOfDestination">Место назначения</label>
                        <select id="placeOfDestination" className="placeOfDestination" value={placeOfDestinationId} onChange={e=>setPlaceOfDestination(e.target.value)}>
                            <option></option>
                            {flight.PlaceOfDestinations.map(destination=>
                                    <option label={destination.airport.airportName} >{destination.id}</option>
                                    )}
                        </select>

                        <label for="departurePoint">Место отправления</label>
                        <select id="departurePoint" className="departurePoint" value={departurePointId} onChange={e=>setDeparturePoint(e.target.value.split(',',1))}>
                            <option></option>
                            {flight.DeparturePoints.map(departure=>
                               
                                <option label ={departure.airport.airportName}>{departure.id}</option>
                                )}
                        </select>

                        <label for="airplane">Обслуживающий самолет</label>
                        <select id="airplane" className="airplane" value={airplaneId} onChange={e=>setAirplaneId(e.target.value)}>
                            <option></option>
                            {flight.Airplanes.map(plane=>
                                <option >{plane.id}</option>
                                )}
                        </select>
                  
                   </div>

                   <button className="addFlightButton" onClick={click}>Добавить в базу</button>
                   <button className="closeModalButton">Close</button>
               </div>
           </div>
        </div>
    )
});

export default Admin;